# Reactly
A class based flux library for react.

## Updates
### 0.0.5
Fixed compatibility issues with internet explorer. Please note that these fixes require changes to the usage patterns. Any component interacting with actions or stores must provide contextTypes and/or childContextTypes properties. The bases classes provide the default implementation of these properties for the subclasses to call. The examples below have been updated.

These issues stemmed from react not resolving static properties from base classes in internet explorer. With these changes internet explorer version 9 and above will work correctly.

## Setup
`npm install reactly`

## Notes
Reactly requires es6 transpiling as it is founded on es6 classes. See reactly-boilerplate below for an example of using webpack with babel transpiling.

## Examples
[reactly-boilerplate](https://github.com/dangw/reactly/tree/master/examples/reactly-boilerplate)

## Usage
Reactly provides base classes to implement actions, stores, modules, and components. Reactly modules are react components that provide stores and actions to all child components. Reactly components are react components that can subscribe to stores and call actions defined by parent reactly modules.

Reactly modules can append stores and views to the stores and views provided by ancestor modules. The root module will instantiate a flux dispatcher which is used by all modules.

### Creating Stores
Reactly.Store is the base class for implementing flux stores with reactly. A single instance of each store is made available to any components that are descendants of a module that provides the stores.
```javascript
class MyAppStore extends Reactly.Store {

    static get actionListeners() {
        return {
            onUpdateName: [Constants.ACTION_UPDATE_NAME]
        };
    }

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
```

### Creating Actions
Reactly.Actions is the base class for implementing flux actions with reactly. A single instance of each actions object is made available to any components that are descendants of a module that provides the actions.
```javascript
class MyAppActions extends Reactly.Actions {

    updateName(name) {
        this.dispatchAction(Constants.ACTION_UPDATE_NAME, {name: name});
    }

}
```

### Creating Modules
Reactly.Module is the base class for providing flux stores and actions context with reactly. Modules can be nested to aggregate sets of stores and actions down the tree. The root app module does not accept context, but the nested modules must accept context to aggregate stores and actions, and to use the single dispatcher.
```javascript
class MyApp extends Reactly.Module {

    static get childContextTypes() {
        return Reactly.Module.childContextTypes;
    }

    static get stores() {
        return [MyAppStore];
    }

    static get actions() {
        return [MyAppActions];
    }

    render() {
        return (
            <MyComponent />
        );
    }

}
```
Sub modules are optional and aggregate context from the ancestor modules and app.
```javascript
class MySubModule extends Reactly.Module {

    static get contextTypes() {
        return Reactly.Module.contextTypes;
    }

    static get childContextTypes() {
        return Reactly.Module.childContextTypes;
    }

    static get stores() {
        return [MySubModuleStore];
    }

    static get actions() {
        return [MySubModuleActions];
    }

    render() {
        return (
            <MySubModuleComponent />
        );
    }

}

```

### Creating Components
Reactly.Component is the base class for any react component that wants to use flux stores and actions with reactly. A reactly component can consume any store or actions object provided by any ancestor module.
```javascript
class MyComponent extends Reactly.Component {

    static get contextTypes() {
        return Reactly.Component.contextTypes;
    }

    static get storeListeners() {
        return {
            onMyAppStoreChange: [MyAppStore]
        };
    }

    onMyAppStoreChange() {
        this.setState({
            name: this.getStore(MyAppStore).getName()
        });
    }

    updateName() {
        this.getActions(MyAppActions).updateName("updated");
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
```

## License
Free to use under the ISC license (see LICENSE.md).
