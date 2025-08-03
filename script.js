// Enhanced JS for AURUM MELS landing with SEO & accessibility

(() => {
  'use strict';
  
  // Performance: Use requestAnimationFrame for smooth animations
  const raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  
  // SEO: Track user interactions for analytics
  const trackEvent = (eventName, data = {}) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, data);
    }
    // Fallback for when analytics isn't loaded
    console.log('Event tracked:', eventName, data);
  };
  
  // Accessibility: Announce changes to screen readers
  const announceToScreenReader = (message) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  };
  
  // Intersection Observer for fade animations
  const fadeSections = document.querySelectorAll('.fade-section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
        
        // Track section visibility for SEO
        const sectionId = entry.target.id;
        if (sectionId) {
          trackEvent('section_view', { section: sectionId });
        }
      }
    });
  }, { 
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeSections.forEach(sec => observer.observe(sec));

  // Smooth scroll with accessibility
  const scrollBtn = document.querySelector('.hero__scroll');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector('#filosofia');
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        announceToScreenReader('Navegando a la sección de filosofía');
        trackEvent('scroll_to_section', { section: 'filosofia' });
      }
    });
  }

  // Enhanced cart functionality
  const cartCountEl = document.querySelector('.cart-count');
  let cartCount = 0;
  let cartItems = [];

  function bumpCart() {
    cartCountEl.classList.add('cart-bump');
    setTimeout(() => cartCountEl.classList.remove('cart-bump'), 300);
  }

  function updateCartCount() {
    cartCountEl.textContent = cartCount;
    cartCountEl.setAttribute('aria-label', `${cartCount} productos en el carrito`);
  }

  // Product interaction tracking
  document.querySelectorAll('.add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productCard = e.target.closest('.product-card');
      const productId = productCard.dataset.id;
      const productName = productCard.querySelector('h3').textContent;
      
      cartCount += 1;
      cartItems.push({
        id: productId,
        name: productName,
        price: 45.00
      });
      
      updateCartCount();
      bumpCart();
      
      // SEO tracking
      trackEvent('add_to_cart', {
        product_id: productId,
        product_name: productName,
        cart_count: cartCount
      });
      
      announceToScreenReader(`${productName} añadido al carrito`);
    });
  });

  // Checkout functionality
  const checkoutBtn = document.querySelector('.checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cartCount === 0) {
        announceToScreenReader('Tu carrito está vacío');
        return;
      }
      
      const total = cartItems.reduce((sum, item) => sum + item.price, 0);
      
      // SEO tracking
      trackEvent('begin_checkout', {
        cart_count: cartCount,
        total_value: total,
        currency: 'EUR'
      });
      
      announceToScreenReader(`Procediendo al pago con ${cartCount} productos`);
      
      // Simulate checkout redirect
      setTimeout(() => {
        alert(`Has añadido ${cartCount} producto(s). Total: €${total.toFixed(2)}. Procediendo al pago...`);
        // Here you would redirect to checkout page
      }, 100);
    });
  }

  // Performance: Lazy load images when they come into view
  const lazyImages = document.querySelectorAll('.product-img');
  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.style.backgroundImage = `url(${img.dataset.src})`;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  lazyImages.forEach(img => {
    if (img.dataset.src) {
      imageObserver.observe(img);
    }
  });

  // SEO: Track page load performance
  window.addEventListener('load', () => {
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0];
      const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
      
      trackEvent('page_load', {
        load_time: loadTime,
        page: 'landing'
      });
    }
  });

  // Accessibility: Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close any open modals or menus
      document.querySelectorAll('[aria-expanded="true"]').forEach(el => {
        el.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // SEO: Track scroll depth
  let maxScrollDepth = 0;
  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollPercent > maxScrollDepth) {
      maxScrollDepth = scrollPercent;
      if (maxScrollDepth % 25 === 0) { // Track every 25%
        trackEvent('scroll_depth', { depth: maxScrollDepth });
      }
    }
  });

  // Performance: Preload critical resources
  const preloadLinks = [
    { rel: 'preload', href: 'assets/roble_centenario_fondo.png', as: 'image' }
  ];

  preloadLinks.forEach(link => {
    const linkEl = document.createElement('link');
    Object.assign(linkEl, link);
    document.head.appendChild(linkEl);
  });



  // Smooth parallax for hero background (optimized for performance)
  let ticking = false;
  const heroBg = document.querySelector('.hero__bg');
  
  function updateParallax() {
    if (!heroBg) return;
    
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3; // Reduced speed for smoother effect
    
    heroBg.style.transform = `translate3d(0, ${rate}px, 0)`;
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  // Throttled scroll listener for better performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      requestTick();
      scrollTimeout = null;
    }, 16); // ~60fps
  }, { passive: true });

  // Control button visibility based on scroll position
  const heroScrollBtn = document.querySelector('.hero__scroll');
  const heroSection = document.querySelector('.hero');
  
  function updateButtonVisibility() {
    if (!heroScrollBtn || !heroSection) return;
    
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollPosition = window.pageYOffset + window.innerHeight;
    
    if (scrollPosition > heroBottom) {
      heroScrollBtn.style.opacity = '0';
      heroScrollBtn.style.visibility = 'hidden';
    } else {
      heroScrollBtn.style.opacity = '1';
      heroScrollBtn.style.visibility = 'visible';
    }
  }
  
  window.addEventListener('scroll', updateButtonVisibility, { passive: true });

  })();