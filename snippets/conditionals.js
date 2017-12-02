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
