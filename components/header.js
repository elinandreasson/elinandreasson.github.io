// This file seems to be generated. DO NOT EDIT 
class Header extends HTMLElement { 
  constructor() { 
    super(); 
} 
  connectedCallback() { 
    this.innerHTML = ` 
<div>
  <div id="top">
    <div id="top-left">
      <address>
        <a href="https://instagram.com/artsbybebe">
          <div>
            <img
              src="https://external-content.duckduckgo.com/ip3/www.instagram.com.ico"
              alt=""
            />
          </div>
        </a>
        <a href="mailto:test@artsbybebe.com">
          <div>
            <img id="mail-icon" src="assets/images/mail.svg" alt="" />
          </div>
        </a>
      </address>
    </div>
    <div id="top-center">
      <a href="/">
        <h1 id="title">ArtsByBebe.com</h1>
      </a>
    </div>
  </div>
  <nav>
    <ul id="links" class="flex-row flex-center">
      <li>
        <a href="about.html">Om mig</a>
      </li>
      <li>
        <a>Galleri</a>
      </li>
      <li>
        <a>Kontakt</a>
      </li>
    </ul>
  </nav>
</div>
    ` 
} 
} 
customElements.define('header-component', Header); 
