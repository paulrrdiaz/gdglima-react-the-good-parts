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
