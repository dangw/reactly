# Reactly
A class based flux library for react.

## Setup
`npm install reactly`

## Usage
Reactly provides base classes to implement actions, stores, modules, and components. Reactly modules are react components that provide stores and actions to all child components. Reactly components are react components that can subscribe to stores and call actions defined by parent reactly modules.

Reactly modules can append stores and views to the stores and views provided by ancestor modules. The root module will instantiate a flux dispatcher which is used by all modules.

### Creating Stores
```javascript
class MyStore extends Reactly.Store {

    initialize() {
        this.state = {
            name: "default"
        }
    }

    getName() {
        return this.state.name;
    }

    onUpdateName(action) {
        this.state.name = action.name;
        this.emitChange();
    }

}

MyStore.actionListeners = {
    onUpdateName: [Constants.ACTION_UPDATE_NAME]
};
```

### Creating Actions
```javascript
class MyActions extends Reactly.Actions {

    updateName(name) {
        this.dispatchAction(Constants.ACTION_UPDATE_NAME, {name: name});
    }

}
```

### Creating Modules
```javascript
class MyModule extends Reactly.Module {

    render() {
        return (
            <MyComponent />
        );
    }

}

App.stores = [MyStore];
App.actions = [MyActions];
```

### Creating Components
```javascript
class MyComponent extends Reactly.Component {

    onMyStoreChange() {
        this.setState({
            name: this.getStore(MyStore).getName()
        });
    }

    updateName() {
        this.getActions(MyActions).updateName("updated");
    }

    render() {
        return (
          <div>
              <div>
                  {this.state.name}
              </div>
              <button onClick={event => {this.updateName()}}>
                  update
              </button>
          </div>
        );
    }

}

MyComponent.storeListeners = {
    onMyStoreChange: [MyStore]
};
```

## License
Free to use under the ISC license (see LICENSE.md).
