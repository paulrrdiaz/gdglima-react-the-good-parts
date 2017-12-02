// Here -> https://www.npmjs.com/package/jsx-control-statements

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
