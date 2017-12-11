# GDG Lima 2017 | React - the good parts

# TL;DR

Este repo contiene un resumen de la charla sobre React para el GDG LIMA 2017 del pasado Noviembre.

Si aún no tienes muchas experiencia con React, sería buena idea que desarrolles algunos ejemplos básicos para tener una idea más clara de los problemas que te ayudará a resolver y si es la mejor opción para tu necesidad.
- [Documentación oficial](https://reactjs.org/)
- [Tutorial básico de React en español](https://frontendlabs.io/3158--react-js-espanol-tutorial-basico-primeros-pasos-ejemplos)

Con esos conceptos básicos podemos continuar...


## Declarative Programming

No podemos hablar de Declarative Programming sin hablar de Imperative Programming, la cual podemos pensar como una manera de describir como funcionan las cosas, mientras que Declarative Programming vendría a ser una manera de describir lo que queremos conseguir.

Por ejemplo, siendo Imperative al pedir un vaso con agua en un restaurant, sería decirle lo siguiente al mesero:
- Coge un vaso del estante
- Busca una jarra con agua
- Llena el vaso con agua
- Trae el vaso hasta mi mesa

Y siendo Declarative solo diría: "Me traes un vaso con agua por favor."

Javascript example:
```javascript
// Imperative
const toLowerCase = input => {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(input[i].toLowerCase())
  }
  return output;
}

// Declarative
const toLowerCase = input => input.map(value => value.toLowerCase());
```

React example:
```javascript
const myLatLng = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

// Imperative
const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 5,
  center: myLatLng,
});

const marker = new google.maps.Marker({
  position: myLatLng,
  title: 'Hello GDG Lima 2017',
});

marker.setMap(map);

// Declarative
<Gmaps lat={myLatLng.lat} lng={myLatLng.lng} zoom={12}>
  <Marker lat={coords.lat} lng={coords.lng} title='Hello GDG Lima 2017' />
</Gmaps>
```

## React Elements

Un React Element es lo que tu quieres ver en la pantalla, pero no literal, si no una representación de un DOM node. La primera ventaja sobre esto es que los objetos en Javascript son ligeros y React puede crearlos y destruirlos sin afectar mucho el rendimiento, la segunda razón es que React es capáz de analizar los objetos, diferenciarlos y encontrar los cambios, luego actualiza el DOM solo en el lugar en donde se produjeron cambios, este proceso es llamado [reconciliation](https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e).

```javascript
const element = React.createElement(
  'div',
  {class: 'btn btn-success'},
  'Click me'
)
```
El bloque de arriba devolverá el siguiente objeto
```javascript
{
  type: 'div',
  props: {
    children: 'Click me',
    class: 'btn btn-success'
  }
}
```
Y renderizará lo siguiente
```javascript
<div id='login-btn'>Login</div>
```


## Open Mind

Jamás fue una buena práctica tener la lógica y los templates en el mismo lugar, pero con React este paradigma es de mucha ayuda y fue el core para pensar en components.
```javascript
render() {
  return (
    <button style={{color: 'red'}} onClick={this.handleClick}>
      Click me!
    </button>
  )
}
```
Además de eso, la idea de encapsular los estilos dentro del componente también fue bastante rara y controversial.
```javascript
var divStyle = {
  color: 'white',
  backgroundImage: 'url(' + imgUrl + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};
ReactDOM.render(
  <div style={divStyle}>Hello World!</div>,
  mountNode
);
```


## Common Patterns

Con JSX tenemos ciertas convenciones y técnicas que debemos de conseguir


**Multi-Line**

```javascript
// Good
<div>
  <Header />
  <div>
    <Main content={...props} />
  <div>
</div>

// Bad
<div><Header /><div><Main content={...props} /><div></div>

// Good
return <div />;

// Bad
return
  <div />;
// Las líneas de arriba devolverán lo siguiente.
return;
React.createElement('div', null);

// Good
return(
  <div />
);
```


**Multi-Properties**

```javascript
// Good
<myAwesomeComponent
  fizz="buzz"
  veryLongProperty="bar"
  onSomething={this.handleSomething}
/>
```


**Conditionals**

```javascript
// Bad
let button;
if (isLoggedIn) {
  button = <LogOutButton />;
}
return <div>{button}</div>;

// Good
<div>
  {isLoggedIn && <LogOutButton />}
</div>




// Bad
let button;
if (isLoggedIn) {
  button = <LogOutButton />;
} else {
  button = <LogInButton />;
}
return <div>{button}</div>;

// Good
<div>
  {isLoggedIn ? <LogOutButton /> : <LogInButton />}
</div>




// Example
<button>
  {isFetching ? 'Loading...' : 'Load More'}
</button>

// Bad
<div>
  {dataIsReady && (isAdmin || userHasPermissions) && <topSecretComponent />}
</div>

// Good
canShowSecretComponent() {
  const {dataIsReady, isAdmin, userHasPermissions} = this.props;
  return dataIsReady && (isAdmin || userHasPermissions);
}

<div>
  {this.canShowSecretComponent() && <topSecretComponent />}
</div>


// Better
get canShowSecretComponent() {
  const {dataIsReady, isAdmin, userHasPermissions} = this.props;
  return dataIsReady && (isAdmin || userHasPermissions);
}

<div>
  {this.canShowSecretComponent && <topSecretComponent />}
</div>


// Much Better
// https://github.com/ajwhite/render-if
class MyComponent extends Component {
  render() {
    const ifTheUniverseIsWorking = renderIf(1 + 2 === 3);
    return ifTheUniverseIsWorking(<span>The universe is still wroking</span>);
  }
}
```


**Loops**

```javascript
<ul>
  {items.map(item => <li>{item.title}</li>)}
</ul>
```

### Control Statements

Usando un paquete de node llamado [jsx-control-statements](https://www.npmjs.com/package/jsx-control-statements)
```console
npm install --save jsx-control-statements
```
```javascript
// before transformation
<If condition={test}>
  <span>Truth</span>
</If>

// after transformation
{test ? <span>Truth</span> : null}




// Before transformation
<Choose>
  <When condition={test1}>
    <span>IfBlock1</span>
  </When>
  <When condition={test2}>
    <span>IfBlock2</span>
  </When>
  <Otherwise>
    <span>ElseBlock</span>
  </Otherwise>
</Choose>

// After transformation
{test1 ? <span>IfBlock1</span> : test2 ? <span>IfBlock2</span> : <span>ElseBlock</span>}




// before transformation
<For each="item" index="index" of={items}>
  <span key={item.id}>{index}. {item.title}</span>
</For>

// after transformation
{
  items.map( function(item, index) {
    <span key={ item.id }>{ index }. { item.title }</span>
  });
}
```
Este tipo de cosas nos ayuda a tener un código mucho más entendible.

### Sub-rendering

Porque la idea es tener nuestros components pequeños, limpios y bonitos.
```javascript
class GdgComponent extends Component {
  renderAdminTools() {
    // code for Admins
  }

  renderUserTools() {
    // code for Users
  }

  render() {
    return(
      <div>
        <h1>GDG Lima 17</h1>
        {this.userExists && this.renderUserTools()}
        {this.userIsAdmin && this.renderAdminTools()}
      </div>
    )
  }
}
```

### Documentation and Guidelines

Es una muy buena prácticar tener un proyecto bien documentado y con una guía de estilos clara para el desarrollo a largo plazo, y es aquí en donde tenemos herramientas como [react-docgen](https://github.com/reactjs/react-docgen) que nos permite crear documentación de los componentes a partir de sus propTypes y defaultProps, y [Storybook](https://github.com/storybooks/storybook) que nos sirve para desarrollar y testear componentes, obteniendo como output final una guía de estilos.


## Container and Presentational pattern


### Containers

- Manipulan data y hacen llamados a algún API
- Pendientes del comportamiento
- Renderizan a los Presentationals
- Define los event handlers
- Están definidos como clases


### Presentationals

- Renderizan el HTML u otros componentes
- Pendientes de lo visual
- Reciben data de sus componentes padres en forma de props
- Normalmente están definidos como stateless functional components

Este pattern nos ayuda mucho cuando queremos reusar funciones, que como desarrolladores, es nuestra meta en la vida.

```javascript
const GeolocationPresentational = ({ latitude, longitude }) => (
  <div>
    <div>Latitude: {latitude}</div>
    <div>Longitude: {longitude}</div>
  </div>
)

GeolocationPresentational.propTypes = {
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number,
}

class GeolocationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess);
    }
  }

  handleSuccess({ coords }) {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  }

  render() {
    return (
      <GeolocationPresentational {...this.state} />
    );
  }
}
```
En el bloque anterior tenemos un componente padre *Container* llamado **GeolocationContainer** y un componente hijo *Presentational* llamado **GeolocationPresentational**

## React 16


### Error Handling

Ahora tenemos un nuevo método en el ciclo de vida de un componente, **componentDidCatch** nos permite capturar los errores dentro del componente *-render, lifecycle methods, constructors-*, registrarlos y enviar un fallback para no romper la aplicación y dar una mejor experiencia al usuario.
```javascript
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch = () => {
    this.setState({
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      return <div className="notification is-danger">Something went wrong</div>
    } else {
      return this.props.children;
    }
  }
}

const FirstRule = props => (
  <li>
    {props.rule.description}
  </li>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRule: {description: 'You do not talk about FIGHT CLUB'},
    }
  }

  render() {
    return (
      <div className="container">
        <h1 data-test="test" class="title">Welcome to Fight Club</h1>
        <ul>
          <ErrorBoundary>
            <FirstRule rule={this.state.firstRule} />
          </ErrorBoundary>
        </ul>
      </div>
    );
  }
}
```
Si por algún motivo no le paso el prop *rule* al componente *FirstRule*, la app se rompería, pero con mi *ErrorBoundary* catcheando los errores, el usuario solo obtendrá un mensaje y sabrá que algo va mal en esa parte, pero la app seguirá funcionando.


### Render Multiple Elements

Ahora tenemos la posibilidad de renderizar más de un component/DOM node sin necesidad de un elemento wrapper.
```javascript
const MoreRules = () => [
  <li key="2">You DO NOT talk about FIGHT CLUB</li>,
  <li key="3">If someone says "stop" or goes limp, taps out the fight is over.</li>,
];

const Aux = props => props.children;
const DamnMoreRules = () =>
  <Aux>
    <li key="4">Only two guys to a fight.</li>
    <li key="5">One fight at a time.</li>
  </Aux>
;

//--- Aquí solo estoy re-usando el componente App del código anterior, porque ahorro es progreso... ;)
render() {
  return (
    <div className="container">
      <h1 data-test="test" class="title">Welcome to Fight Club</h1>
      <ul>
        <ErrorBoundary>
          <FirstRule rule={this.state.firstRule} />
        </ErrorBoundary>
        <MoreRules />
        <DamnMoreRules />
        <li key="6">No shirts, no shoes.</li>
      </ul>
    </div>
  );
}
---//
```


### Render elements outside the current root

Esta nueva funcionalidad tiene mucho potencial, ya que nos permitirá crear componentes fuera del root definido al inicio, por ejemplo para la creación de un modal.
```javascript
class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalContainer = document.createElement('div');
    document.body.appendChild(this.modalContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            {this.props.children}
          </div>
        </div>
        <button class="modal-close is-large" onClick={this.props.onClose} aria-label="close"></button>
      </div>,
      this.modalContainer
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsActive: false,
    }
  }

  toggleModal = () => {
    this.setState({
      modalIsActive: !this.state.modalIsActive,
    })
  }

  render() {
    return (
      <div className="container">
        {
          this.state.modalIsActive ?
          <Modal onClose={this.toggleModal}>This is a Modal outside the root x_x</Modal> :
          <button className="button" onClick={this.toggleModal}>Open Modal</button>
        }
      </div>
    )
  }
}
```


### Define DOM attributes

Ahora tenemos la libertad de declarar atributos customizados, siguen respetando el camelCase de los default attributes y ahora puedes usar el atributo *class* sin romper la app, pero con un warning de por medio.
```javascript
//---
render() {
  return (
    <div
      my-custom-attribute="fizz"
      tabIndex="1"
      class="info"
    >
      Hola!
    </div>
  );
}
---//
```


### Call setState with null to avoid triggering an update

Ahora tenemos la posibilidad de retornar *null* en el *setState* para evitar un llamar al render de no ser necesario.
```javascript
//---
fetchData = (type) => {
  fetch(type)
  .then((response) => {
    response.json().then((data) => {
      this.setState(state => {
        return state.data == data ? null : { data, };
      });
    })
  })
  .catch((error) => {
    this.setState({
      errorFetching: true,
    })
  });
}

componentWillMount = () => {
  this.fetchData(photos);
}
---//
```
