// This file is generated based on header.html. DO NOT EDIT
class Header extends HTMLElement {
constructor() {
super();
}
connectedCallback() {
this.innerHTML = `
<div>
  <div id="top">
    <div id="top-center">
      <a href="/">
        <h1 id="title">ArtsByBebe</h1>
      </a>
    </div>
  </div>
  <nav>
    <ul id="links" class="flex-row flex-center">
      <li>
        <a href="about.html">Om mig</a>
      </li>
      <li>
        <a href="gallery.html">Galleri</a>
      </li>
      <li>
        <a href="contact.html">Kontakt</a>
      </li>
    </ul>
  </nav>
</div>
`
}
}
customElements.define('header-component', Header);
