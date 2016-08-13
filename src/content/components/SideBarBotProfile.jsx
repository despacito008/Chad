const {
  Divider,
  Avatar,
  ListItem,
  IconButton,
  IconMenu,
  MenuItem,
  FlatButton,
  TextField,
  Dialog,
  CircularProgress,
} = require('material-ui');
const MoreVertIcon = require('material-ui/svg-icons/navigation/more-vert').default;
const RefreshIcon = require('material-ui/svg-icons/navigation/refresh').default;
const ChangeIcon = require('material-ui/svg-icons/editor/mode-edit').default;
const RemoveIcon = require('material-ui/svg-icons/action/delete').default;

class SideBarBotProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false,
      avatarLoad: false,
      setAdminBotDialog: false,
      token: this.props.token || '',
    };

    this.props.signal.register('SetLoadState', (s) => this.setState({ load: s }));
    this.props.signal.register('SetAvatarLoadState', (s) => this.setState({ avatarLoad: s }));
  }

  openSetAdminBotDialog() {
    this.setState({ setAdminBotDialog: true });
  }

  closeSetAdminBotDialog() {
    this.setState({ setAdminBotDialog: false });
  }

  tokenChange(event) {
    this.setState({ token: event.target.value });
  }

  setAdminBot() {
    let onPass = () => {
      this.closeSetAdminBotDialog();
    };

    this.props.signal.call('SetAdminBot', [this.state.token, onPass]);
  }

  render() {
    let BotProfile;

    let BotAvatar = this.state.avatarLoad ?
      (<CircularProgress style={{ marginTop: -5 }} size={.5} />) :
      (<Avatar src={this.props.avatar} />);

    if (this.state.load) {
      BotProfile = <ListItem
        primaryText={this.props.local.loading}
        leftAvatar={<CircularProgress style={{ marginTop: -5 }} size={.5}/>} />;
    } else if (this.props.name) {
      BotProfile = (
        <ListItem
          leftAvatar={BotAvatar}
          primaryText={<div className='ellipsis'>{this.props.name}</div>}
          secondaryText={this.props.username}
          rightIconButton={
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }} >
              <MenuItem
                leftIcon={<RefreshIcon />}
                onClick={() => this.props.signal.call('SetAdminBot', [this.state.token])}
                primaryText={this.props.local.bot_refresh} />
              <MenuItem
                leftIcon={<ChangeIcon />}
                onClick={() => this.openSetAdminBotDialog()}
                primaryText={this.props.local.bot_change} />
              <MenuItem
                leftIcon={<RemoveIcon />}
                onClick={() => this.props.signal.call('RemoveAdminBot')}
                primaryText={this.props.local.bot_remove} />
            </IconMenu>
        }/>);
    } else {
      BotProfile = (
        <ListItem
          onClick={() => this.openSetAdminBotDialog()}
          leftAvatar={<Avatar src={this.props.avatar} />}
          primaryText={<div className='ellipsis'>{this.props.local.bot_set}</div>} />);
    }

    let actions = [
      <FlatButton
        label={this.props.local.d_set_admin_bot_cancel}
        onClick={() => this.closeSetAdminBotDialog()}
      />,
      <FlatButton
        label={this.props.local.d_set_admin_bot_save}
        primary={true}
        onClick={() => this.setAdminBot()}
      />,
    ];

    return (
      <div>
        <Divider/>
        {BotProfile}
        <Dialog
          title={this.props.local.d_set_admin_bot}
          actions={actions}
          modal={true}
          contentStyle={{ width: 300 }}
          open={this.state.setAdminBotDialog}>
          <TextField
            value={this.state.token}
            onChange={(e) => this.tokenChange(e)}
            floatingLabelText={this.props.local.d_set_admin_bot_token}
            hintText='123456:ABC-DEF1234ghIk...'/>
        </Dialog>
      </div>
    );
  }
}

module.exports = SideBarBotProfile;