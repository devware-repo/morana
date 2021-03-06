/* eslint-disable */

// Abrir e Fechar o Menu Lateral
$(document).ready(function() {
  const isMobile = window.matchMedia('(max-width: 1023px)')
  if (!isMobile.matches) {
    const MenuFechado = localStorage.MenuFechado
    if (MenuFechado === 's') {
      $('.menu-lateral, .produtos-tela').toggleClass('menu-closed')
      $('.menu-text').toggleClass('is-closed')
      $('.menu-icon-admin').toggleClass('col-12 my-3 w-75')
      $('.menu-icon').toggleClass('col-12 my-3 pr-0 text-right')
      $('.admin-icon').toggleClass('is-closed')
    }
    $('#menu-icon').on('click', function() {
      $('.menu-lateral, .produtos-tela').toggleClass('menu-closed')
      $('.menu-text').toggleClass('is-closed')
      $('.menu-icon-admin').toggleClass('col-12 my-3 w-75')
      $('.menu-icon').toggleClass('col-12 my-3 pr-0 text-right')
      $('.admin-icon').toggleClass('is-closed')
      localStorage.MenuFechado = $('#menu-icon').hasClass('is-closed')
        ? 's'
        : 'n'
    })
  } else {
    $('#menu-icon-mobile, #menu-close-mobile').on('click', function() {
      $('body').toggleClass('no-scroll')
      $('.menu-lateral-mobile').toggleClass('d-none')
      $('.menu-overlay').toggleClass('d-none')
      $('.add-button').fadeToggle('300')
    })
  }
  // Ativar Link Atual
  const $currentUrl = window.location.href
  $('.menu-lateral-link').each(function() {
    const $linkUrl = $(this).prop('href')
    if ($currentUrl.replace('#', '') === $linkUrl.replace('#', '')) {
      $(this)
        .children('.row')
        .addClass('link-active')
    }
  })
})
