function customRender(reactElement, containcer) {
  /*
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.href)
  containcer.appendChild(domElement)

  */


  const domElement = document.createElement(reactElement.type)
  domElement.innerHtml = reactElement.children

  for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribuite(prop, reactElement.props[prop])
  }
  containcer.appendChild(domElement)


}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)