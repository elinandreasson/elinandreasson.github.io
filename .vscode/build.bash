#!/bin/bash

echo 'Generating javascript for custom markup elements.'
exec > /dev/null 2>&1
echo '// This file is generated based on header.html. DO NOT EDIT' > header.js
echo 'class Header extends HTMLElement {' >> header.js
echo 'constructor() {' >> header.js
echo 'super();' >> header.js
echo '}' >> header.js
echo 'connectedCallback() {' >> header.js
echo 'this.innerHTML = `' >> header.js
cat header.html >> header.js
echo '`' >> header.js
echo '}' >> header.js
echo '}' >> header.js
echo 'customElements.define('\''header-component'\'', Header);' >> header.js