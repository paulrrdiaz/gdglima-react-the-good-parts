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
===
return;
React.createElement('div', null);

// Good
return(
  <div />
);
