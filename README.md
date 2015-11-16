# reactly
A class based flux library for react

## How to Set It Up
`npm install --save reactly`

## Why You Might Want It
Reactly provides simple base classes for applying the flux pattern in your react application. It is not a framework but rather utilities to make applying the flux pattern simpler. Reactly encourages nested store and action contexts, called modules, so that you don't have to keep your whole app's state in memory as you navigate between different routes. When a module is unmounted it releases its stores.

## Things You Should Know
* Designed to be used with es6 classes
* Works with React 0.13 and React 0.14
* Depends on the flux and eventemmiter3 packages

## What's New in the Latest Version
* 0.1.1
  * stores now receive the module's child context in their initialize call  
* 0.1.0
  * removed the need for the `id` property of stores and actions
  * the es6 sources have been moved to the `src` folder
  * the `lib` folder is now transpiled from es6 to es5
* 0.0.5
  * fixed browser compatibility issues

## Give Me an Example
[reactly-boilerplate](https://github.com/dangw/reactly/tree/master/examples/reactly-boilerplate)

## How To Use It
Reactly provides base classes to implement actions, stores, modules, and components. Reactly modules are react components that provide stores and actions to all child components. Reactly components are react components that can subscribe to stores and call actions defined by parent reactly modules.

Reactly modules can append stores and actions to the stores and actions provided by ancestor modules. The root module will instantiate a flux dispatcher which is used by all modules.

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
