/* eslint-disable import/no-unresolved */

// Drop-in Providers
import { render as cartProvider } from '@dropins/storefront-cart/render.js';

// Drop-in Containers
import MiniCart from '@dropins/storefront-cart/containers/MiniCart.js';

// Drop-in Tools
import { events } from '@dropins/tools/event-bus.js';

import { getMetadata, fetchPlaceholders } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// TODO: Following two imports added for demo purpose (Auth Drop-In)
import renderAuthCombine from './renderAuthCombine.js';
import { renderAuthDropdown } from './renderAuthDropdown.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections
    .querySelectorAll('.nav-sections .default-content-wrapper > ul > li')
    .forEach((section) => {
      section.setAttribute('aria-expanded', expanded);
    });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = expanded || isDesktop.matches ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('role', 'button');
        drop.setAttribute('tabindex', 0);
        drop.addEventListener('focus', focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('role');
      drop.removeAttribute('tabindex');
      drop.removeEventListener('focus', focusNavSection);
    });
  }
  // enable menu collapse on escape keypress
  if (!expanded || isDesktop.matches) {
    // collapse menu on escape press
    window.addEventListener('keydown', closeOnEscape);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
  }
}

function getDirectTextContent(menuItem) {
  const menuLink = menuItem.querySelector(':scope > a');
  if (menuLink) {
    return menuLink.textContent.trim();
  }
  return Array.from(menuItem.childNodes)
    .filter((n) => n.nodeType === Node.TEXT_NODE)
    .map((n) => n.textContent)
    .join(' ');
}

async function buildBreadcrumbsFromNavTree(nav, currentUrl) {
  const crumbs = [];

  const homeUrl = document.querySelector('.nav-brand a').href;

  let menuItem = Array.from(nav.querySelectorAll('a')).find((a) => a.href === currentUrl);
  if (menuItem) {
    do {
      const link = menuItem.querySelector(':scope > a');
      crumbs.unshift({ title: getDirectTextContent(menuItem), url: link ? link.href : null });
      menuItem = menuItem.closest('ul')?.closest('li');
    } while (menuItem);
  } else if (currentUrl !== homeUrl) {
    crumbs.unshift({ title: getMetadata('og:title'), url: currentUrl });
  }

  const placeholders = await fetchPlaceholders();
  const homePlaceholder = placeholders.breadcrumbsHomeLabel || 'Home';

  crumbs.unshift({ title: homePlaceholder, url: homeUrl });

  // last link is current page and should not be linked
  if (crumbs.length > 1) {
    crumbs[crumbs.length - 1].url = null;
  }
  crumbs[crumbs.length - 1]['aria-current'] = 'page';
  return crumbs;
}

async function buildBreadcrumbs() {
  const breadcrumbs = document.createElement('nav');
  breadcrumbs.className = 'breadcrumbs';

  const crumbs = await buildBreadcrumbsFromNavTree(document.querySelector('.nav-sections'), document.location.href);

  const ol = document.createElement('ol');
  ol.append(...crumbs.map((item) => {
    const li = document.createElement('li');
    if (item['aria-current']) li.setAttribute('aria-current', item['aria-current']);
    if (item.url) {
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      li.append(a);
    } else {
      li.textContent = item.title;
    }
    return li;
  }));

  breadcrumbs.append(ol);
  return breadcrumbs;
}

/**
 * Finds the nearest sibling of an element that matches the specified selector.
 * @param {Element} element - The reference element.
 * @param {string} selector - The selector to match the sibling element.
 * @returns {Element|null} - The nearest sibling that matches the selector, or null if not found.
 */
function findNearestSibling(element, selector) {
  if (!element || !selector) return null;

  // Start with the next sibling
  let sibling = element.nextElementSibling;

  // Traverse through the siblings
  while (sibling) {
    if (sibling.matches(selector)) {
      return sibling; // Return the matching sibling
    }
    sibling = sibling.nextElementSibling;
  }

  // Return null if no matching sibling is found
  return null;
}

/**
 * Finds the parent element by a specific selector.
 * @param {Element} element - The reference element.
 * @param {string} selector - The selector to match the parent element.
 * @returns {Element|null} - The parent element that matches the selector, or null if not found.
 */
function getParentBySelector(element, selector) {
  if (!element || !selector) return null;

  // Use .closest() to find the nearest ancestor (or self) that matches the selector
  const parentElement = element.closest(selector);

  return parentElement;
}

// Function to close all open menus
function closeAllMenus(navSections) {
  const openButtons = navSections.querySelectorAll('.menu-toggle-button[aria-expanded="true"]');
  openButtons.forEach((button) => {
    button.setAttribute('aria-expanded', 'false');
  });
}

function toggleAriaExpanded(navSections, button) {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  closeAllMenus(navSections); // Close other open menus
  button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
}

function setMegaMenuAccessibility(button, navSections, menuName) {
  button.setAttribute('aria-controls', menuName);
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('type', 'button');

  const srOnlySpan = document.createElement('span');
  if (isDesktop.matches) {
    srOnlySpan.classList.add('sr-only');
  }
  srOnlySpan.textContent = menuName;

  const arrowSpan = document.createElement('span');
  arrowSpan.setAttribute('aria-hidden', 'true');
  arrowSpan.classList.add('menu-dropdown-arrow');

  button.append(srOnlySpan);
  button.append(arrowSpan);

  button.addEventListener('click', () => toggleAriaExpanded(navSections, button));
  button.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default action for Enter key
      toggleAriaExpanded(navSections, button);
    } else if (event.key === 'Escape') {
      if (button.getAttribute('aria-expanded') === 'true') {
        button.setAttribute('aria-expanded', 'false');
      }
    }
  });

  if (!isDesktop.matches) {
    // Function to handle toggling active class
    const handleToggleActive = (event) => {
      // Check if the event is a click or if the Enter key is pressed
      if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
        // Find the parent <li> of the clicked button
        const li = button.closest('li');
        if (li) {
          // Toggle the active class
          li.classList.toggle('active');
          // Optionally, remove the active class from other <li> elements
          const allLi = navSections.querySelectorAll('li');
          allLi.forEach((item) => {
            if (item !== li) {
              item.classList.remove('active');
            }
          });
        }
      }
    };

    button.addEventListener('click', handleToggleActive);
    button.addEventListener('keydown', handleToggleActive);
  }
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/mega-menu';
  const fragment = await loadFragment(navPath);

  // decorate nav DOM
  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  const navBrand = nav.querySelector('.nav-brand');
  const brandLink = navBrand.querySelector('.button');
  if (brandLink) {
    brandLink.className = '';
    brandLink.closest('.button-container').className = '';
  }

  const navSections = nav.querySelector('.nav-sections');
  if (navSections) {
    const megaMenu = document.createElement('ul');
    megaMenu.classList.add('mega-menu');

    navSections
      .querySelectorAll(':scope .default-content-wrapper > ul > li')
      .forEach((navSection) => {
        const clonedNavSection = navSection.cloneNode(false); // Clone without children
        const originalLink = navSection.querySelector('a');
        const link = originalLink.cloneNode(true); // Clone the <a> tag
        link.classList.add('main-nav');
        const menuParent = getParentBySelector(navSection, '.default-content-wrapper');

        const megaMenuCmsContent = findNearestSibling(menuParent, '.columns-wrapper');

        if (navSection.querySelector('ul')) clonedNavSection.classList.add('nav-drop');

        if (megaMenuCmsContent && navSection.nextElementSibling === null) {
          clonedNavSection.classList.add('has-mega-menu');
          megaMenuCmsContent.classList.add('mega-menu-content');
          const button = document.createElement('button');
          const menuName = isDesktop.matches ? `${link.textContent.trim().replace(/\s+/g, '-')}-menu` : link.textContent.trim();
          button.classList.add('menu-toggle-button');
          setMegaMenuAccessibility(button, navSection, menuName);
          clonedNavSection.append(link);
          clonedNavSection.append(button);
          clonedNavSection.append(megaMenuCmsContent);
        } else {
          clonedNavSection.append(link);
        }

        megaMenu.append(clonedNavSection);
      });

    navSections.innerHTML = '';
    navSections.append(megaMenu);

    // Close all menus when clicking outside
    document.addEventListener('click', (event) => {
      const expandedMenu = document.querySelectorAll('.menu-toggle-button[aria-expanded="true"]');
      if (!navSections.contains(event.target) || expandedMenu) {
        closeAllMenus(navSections);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        setTimeout(() => {
          const focusedElement = document.activeElement;
          if (!navSections.contains(focusedElement)) {
            closeAllMenus(navSections);
          }
        }, 0);
      }
    });

    // Close other menus when focusing on a different main-nav link
    navSections.addEventListener('focusin', (event) => {
      if (event.target.classList.contains('main-nav')) {
        closeAllMenus(navSections);
      }
    });
  }

  const navTools = nav.querySelector('.nav-tools');

  /** Mini Cart */
  const excludeMiniCartFromPaths = ['/checkout', '/order-confirmation'];

  const minicart = document.createRange().createContextualFragment(`
     <div class="minicart-wrapper nav-tools-wrapper">
       <button type="button" class="nav-cart-button" aria-label="Cart"></button>
       <div class="minicart-panel nav-tools-panel"></div>
     </div>
   `);

  navTools.append(minicart);

  const minicartPanel = navTools.querySelector('.minicart-panel');

  const cartButton = navTools.querySelector('.nav-cart-button');

  if (excludeMiniCartFromPaths.includes(window.location.pathname)) {
    cartButton.style.display = 'none';
  }

  async function toggleMiniCart(state) {
    const show = state ?? !minicartPanel.classList.contains('nav-tools-panel--show');

    if (show) {
      await cartProvider.render(MiniCart, {
        routeEmptyCartCTA: () => '/',
        routeProduct: (product) => `/products/${product.url.urlKey}/${product.sku}`,
        routeCart: () => '/cart',
        routeCheckout: () => '/checkout',
      })(minicartPanel);
    } else {
      cartProvider.unmount(minicartPanel);
    }

    minicartPanel.classList.toggle('nav-tools-panel--show', show);
  }

  cartButton.addEventListener('click', () => toggleMiniCart());

  // Cart Item Counter
  events.on(
    'cart/data',
    (data) => {
      if (data?.totalQuantity) {
        cartButton.setAttribute('data-count', data.totalQuantity);
      } else {
        cartButton.removeAttribute('data-count');
      }
    },
    { eager: true },
  );

  /** Search */

  // TODO
  const search = document.createRange().createContextualFragment(`
  <div class="search-wrapper nav-tools-wrapper">
    <button type="button" class="nav-search-button">Search</button>
    <div class="nav-search-input nav-search-panel nav-tools-panel">
      <form action="/search" method="GET">
        <input id="search" type="search" name="q" placeholder="Search" />
        <div id="search_autocomplete" class="search-autocomplete"></div>
      </form>
    </div>
  </div>
  `);

  navTools.append(search);

  const searchPanel = navTools.querySelector('.nav-search-panel');

  const searchButton = navTools.querySelector('.nav-search-button');

  const searchInput = searchPanel.querySelector('input');

  async function toggleSearch(state) {
    const show = state ?? !searchPanel.classList.contains('nav-tools-panel--show');

    searchPanel.classList.toggle('nav-tools-panel--show', show);

    if (show) {
      await import('./searchbar.js');
      searchInput.focus();
    }
  }

  navTools.querySelector('.nav-search-button').addEventListener('click', () => toggleSearch());

  // Close panels when clicking outside
  document.addEventListener('click', (e) => {
    if (!minicartPanel.contains(e.target) && !cartButton.contains(e.target)) {
      toggleMiniCart(false);
    }

    if (!searchPanel.contains(e.target) && !searchButton.contains(e.target)) {
      toggleSearch(false);
    }
  });

  // hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');
  // prevent mobile nav behavior on window resize
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
  // Create the skip link element
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to Main Content';

  // Select the .header-wrapper element
  const headerWrapper = document.querySelector('.header-wrapper');

  // Insert the skip link above .header-wrapper
  const parent = headerWrapper.parentNode;
  parent.insertBefore(skipLink, headerWrapper);

  // Create the main element and set its ID
  const mainContent = document.querySelector('main');
  mainContent.id = 'main-content';

  // TODO: Following statements added for demo purpose (Auth Drop-In)
  renderAuthCombine(navSections);
  renderAuthDropdown(navTools);

  if (getMetadata('breadcrumbs').toLowerCase() === 'true') {
    block.append(await buildBreadcrumbs());
  }
}
