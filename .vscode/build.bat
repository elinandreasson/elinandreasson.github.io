@echo off
echo // This file is generated. DO NOT EDIT > header.js
echo class Header extends HTMLElement { >> header.js
echo   constructor() { >> header.js
echo     super(); >> header.js
echo } >> header.js
echo   connectedCallback() { >> header.js
echo     this.innerHTML = ` >> header.js
copy header.js + header.html header.js
echo     ` >> header.js
echo } >> header.js
echo } >> header.js
echo customElements.define('header-component', Header); >> header.js
