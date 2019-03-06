(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/operators'), require('rxjs/Subject')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs/operators', 'rxjs/Subject'], factory) :
    (factory((global.dynamicComponent = {}),global.ng.core,global.ng.common,global.Rx,global.Rx));
}(this, (function (exports,core,common,operators,Subject) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ COMPONENT_INJECTOR = new core.InjectionToken('ComponentInjector');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ComponentOutletInjectorDirective = (function () {
        /**
         * @param {?} componentOutlet
         */
        function ComponentOutletInjectorDirective(componentOutlet) {
            this.componentOutlet = componentOutlet;
        }
        Object.defineProperty(ComponentOutletInjectorDirective.prototype, "componentRef", {
            /**
             * @return {?}
             */
            get: function () {
                return ((this.componentOutlet))._componentRef;
            },
            enumerable: true,
            configurable: true
        });
        return ComponentOutletInjectorDirective;
    }());
    ComponentOutletInjectorDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[ngComponentOutlet]',
                    exportAs: 'ndcComponentOutletInjector',
                },] },
    ];
    /** @nocollapse */
    ComponentOutletInjectorDirective.ctorParameters = function () { return [
        { type: common.NgComponentOutlet, decorators: [{ type: core.Host },] },
    ]; };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicAttributesDirective = (function () {
        /**
         * @param {?} renderer
         * @param {?} differs
         * @param {?} injector
         * @param {?} componentInjectorType
         * @param {?} componentOutletInjector
         */
        function DynamicAttributesDirective(renderer, differs, injector, componentInjectorType, componentOutletInjector) {
            this.renderer = renderer;
            this.differs = differs;
            this.injector = injector;
            this.componentInjectorType = componentInjectorType;
            this.componentOutletInjector = componentOutletInjector;
            this._attrsDiffer = this.differs.find({}).create();
            this._componentInjector = this.injector.get(this.componentInjectorType, null);
        }
        Object.defineProperty(DynamicAttributesDirective.prototype, "_attributes", {
            /**
             * @return {?}
             */
            get: function () {
                return (this.ndcDynamicAttributes || this.ngComponentOutletNdcDynamicAttributes);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicAttributesDirective.prototype, "_compInjector", {
            /**
             * @return {?}
             */
            get: function () {
                return this.componentOutletInjector || this._componentInjector;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicAttributesDirective.prototype, "_nativeElement", {
            /**
             * @return {?}
             */
            get: function () {
                return this._compInjector.componentRef.location.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicAttributesDirective.prototype, "_compType", {
            /**
             * @return {?}
             */
            get: function () {
                return this._compInjector.componentRef.componentType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicAttributesDirective.prototype, "_isCompChanged", {
            /**
             * @return {?}
             */
            get: function () {
                if (this._lastCompType !== this._compType) {
                    this._lastCompType = this._compType;
                    return true;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicAttributesDirective.prototype.ngDoCheck = function () {
            var /** @type {?} */ isCompChanged = this._isCompChanged;
            var /** @type {?} */ changes = this._attrsDiffer.diff(this._attributes);
            if (changes) {
                this._lastAttrActions = this._changesToAttrActions(changes);
            }
            if (changes || (isCompChanged && this._lastAttrActions)) {
                this._updateAttributes(this._lastAttrActions);
            }
        };
        /**
         * @param {?} name
         * @param {?} value
         * @param {?=} namespace
         * @return {?}
         */
        DynamicAttributesDirective.prototype.setAttribute = function (name, value, namespace) {
            this.renderer.setAttribute(this._nativeElement, name, value, namespace);
        };
        /**
         * @param {?} name
         * @param {?=} namespace
         * @return {?}
         */
        DynamicAttributesDirective.prototype.removeAttribute = function (name, namespace) {
            this.renderer.removeAttribute(this._nativeElement, name, namespace);
        };
        /**
         * @param {?} actions
         * @return {?}
         */
        DynamicAttributesDirective.prototype._updateAttributes = function (actions) {
            var _this = this;
            Object.keys(actions.set).forEach(function (key) { return _this.setAttribute(key, actions.set[key]); });
            actions.remove.forEach(function (key) { return _this.removeAttribute(key); });
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DynamicAttributesDirective.prototype._changesToAttrActions = function (changes) {
            var /** @type {?} */ attrActions = {
                set: {},
                remove: [],
            };
            changes.forEachAddedItem(function (r) { return (attrActions.set[r.key] = r.currentValue); });
            changes.forEachChangedItem(function (r) { return (attrActions.set[r.key] = r.currentValue); });
            changes.forEachRemovedItem(function (r) { return attrActions.remove.push(r.key); });
            return attrActions;
        };
        return DynamicAttributesDirective;
    }());
    DynamicAttributesDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[ndcDynamicAttributes],[ngComponentOutletNdcDynamicAttributes]',
                    exportAs: 'ndcDynamicAttributes',
                },] },
    ];
    /** @nocollapse */
    DynamicAttributesDirective.ctorParameters = function () { return [
        { type: core.Renderer2, },
        { type: core.KeyValueDiffers, },
        { type: core.Injector, },
        { type: undefined, decorators: [{ type: core.Inject, args: [COMPONENT_INJECTOR,] },] },
        { type: ComponentOutletInjectorDirective, decorators: [{ type: core.Optional }, { type: core.Host },] },
    ]; };
    DynamicAttributesDirective.propDecorators = {
        "ndcDynamicAttributes": [{ type: core.Input },],
        "ngComponentOutletNdcDynamicAttributes": [{ type: core.Input },],
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicComponent = (function () {
        /**
         * @param {?} _vcr
         * @param {?} _cfr
         */
        function DynamicComponent(_vcr, _cfr) {
            this._vcr = _vcr;
            this._cfr = _cfr;
            this.ndcDynamicCreated = new core.EventEmitter();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        DynamicComponent.prototype.ngOnChanges = function (changes) {
            if (changes['ndcDynamicComponent']) {
                this.createDynamicComponent();
            }
        };
        /**
         * @return {?}
         */
        DynamicComponent.prototype.createDynamicComponent = function () {
            this._vcr.clear();
            this.componentRef = null;
            if (this.ndcDynamicComponent) {
                this.componentRef = this._vcr.createComponent(this._cfr.resolveComponentFactory(this.ndcDynamicComponent), 0, this._resolveInjector(), this.ndcDynamicContent);
                this.ndcDynamicCreated.emit(this.componentRef);
            }
        };
        /**
         * @return {?}
         */
        DynamicComponent.prototype._resolveInjector = function () {
            var /** @type {?} */ injector = this.ndcDynamicInjector || this._vcr.parentInjector;
            if (this.ndcDynamicProviders) {
                injector = core.ReflectiveInjector.resolveAndCreate(this.ndcDynamicProviders, injector);
            }
            return injector;
        };
        return DynamicComponent;
    }());
    DynamicComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ndc-dynamic',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    DynamicComponent.ctorParameters = function () { return [
        { type: core.ViewContainerRef, },
        { type: core.ComponentFactoryResolver, },
    ]; };
    DynamicComponent.propDecorators = {
        "ndcDynamicComponent": [{ type: core.Input },],
        "ndcDynamicInjector": [{ type: core.Input },],
        "ndcDynamicProviders": [{ type: core.Input },],
        "ndcDynamicContent": [{ type: core.Input },],
        "ndcDynamicCreated": [{ type: core.Output },],
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} val
     * @return {?}
     */
    function createNewChange(val) {
        return new core.SimpleChange(undefined, val, true);
    }
    /**
     * @param {?} record
     * @param {?=} isFirstChange
     * @return {?}
     */
    function recordToChange(record, isFirstChange) {
        if (isFirstChange === void 0) { isFirstChange = false; }
        return isFirstChange
            ? createNewChange(record.currentValue)
            : new core.SimpleChange(record.previousValue, record.currentValue, false);
    }
    /**
     * @param {?} isFirstChanges
     * @param {?} setter
     * @return {?}
     */
    function setChangeFromRecord(isFirstChanges, setter) {
        return function (record) { return setter(record, recordToChange(record, isFirstChanges)); };
    }
    /**
     * @param {?} isFirstChanges
     * @return {?}
     */
    function getChangesRecords(isFirstChanges) {
        return function (changes) { return setChangeFromRecord(isFirstChanges, function (record, change) { return changes[record.key] = change; }); };
    }
    /**
     * @param {?} isFirstChanges
     * @return {?}
     */
    function getNewChangesRecords(isFirstChanges) {
        return function (changes) { return setChangeFromRecord(isFirstChanges, function (record, change) {
            if (!changes[record.key]) {
                changes[record.key] = change;
            }
        }); };
    }
    var /** @type {?} */ defaultOpts = {
        isFirstChanges: false,
        onlyNewChanges: false,
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    function changesFromRecord(opts) {
        if (opts === void 0) { opts = defaultOpts; }
        return opts.onlyNewChanges
            ? getNewChangesRecords(opts.isFirstChanges)
            : getChangesRecords(opts.isFirstChanges);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ recordToChanges = changesFromRecord({ isFirstChanges: true });
    var /** @type {?} */ recordToNewChanges = changesFromRecord({ onlyNewChanges: true });
    var DynamicDirective = (function () {
        /**
         * @param {?} _differs
         * @param {?} _injector
         * @param {?} _cfr
         * @param {?} _componentInjectorType
         * @param {?} _componentOutletInjector
         */
        function DynamicDirective(_differs, _injector, _cfr, _componentInjectorType, _componentOutletInjector) {
            this._differs = _differs;
            this._injector = _injector;
            this._cfr = _cfr;
            this._componentInjectorType = _componentInjectorType;
            this._componentOutletInjector = _componentOutletInjector;
            this._componentInjector = this._injector.get(this._componentInjectorType, null);
            this._lastComponentInst = this._componentInjector;
            this._inputsDiffer = this._differs.find({}).create();
            this._compFactory = null;
            this._outputsShouldDisconnect$ = new Subject.Subject();
        }
        Object.defineProperty(DynamicDirective.prototype, "_inputs", {
            /**
             * @return {?}
             */
            get: function () {
                return this.ndcDynamicInputs || this.ngComponentOutletNdcDynamicInputs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDirective.prototype, "_outputs", {
            /**
             * @return {?}
             */
            get: function () {
                return this.ndcDynamicOutputs || this.ngComponentOutletNdcDynamicOutputs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDirective.prototype, "_compInjector", {
            /**
             * @return {?}
             */
            get: function () {
                return this._componentOutletInjector || this._componentInjector;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDirective.prototype, "_compRef", {
            /**
             * @return {?}
             */
            get: function () {
                return this._compInjector.componentRef;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDirective.prototype, "_componentInst", {
            /**
             * @return {?}
             */
            get: function () {
                return this._compRef.instance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDirective.prototype, "_compCdr", {
            /**
             * @return {?}
             */
            get: function () {
                if (this._compRef && this._compRef.injector) {
                    return this._compRef.injector.get(core.ChangeDetectorRef);
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicDirective.prototype, "_componentInstChanged", {
            /**
             * @return {?}
             */
            get: function () {
                if (this._lastComponentInst !== this._componentInst) {
                    this._lastComponentInst = this._componentInst;
                    return true;
                }
                else {
                    return false;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        DynamicDirective.prototype.ngOnChanges = function (changes) {
            var /** @type {?} */ compChanged = this._componentInstChanged;
            if (compChanged || this._inputsChanged(changes)) {
                var /** @type {?} */ inputsChanges = this._getInputsChanges(this._inputs);
                if (inputsChanges) {
                    this._updateInputChanges(inputsChanges);
                }
                this.updateInputs(compChanged || !this._lastInputChanges);
            }
            if (compChanged || this._outputsChanged(changes)) {
                this.bindOutputs();
            }
        };
        /**
         * @return {?}
         */
        DynamicDirective.prototype.ngDoCheck = function () {
            if (this._componentInstChanged) {
                this.updateInputs(true);
                this.bindOutputs();
                return;
            }
            var /** @type {?} */ inputs = this._inputs;
            if (!inputs) {
                return;
            }
            var /** @type {?} */ inputsChanges = this._getInputsChanges(this._inputs);
            if (inputsChanges) {
                var /** @type {?} */ isNotFirstChange = !!this._lastInputChanges;
                this._updateInputChanges(inputsChanges);
                if (isNotFirstChange) {
                    this.updateInputs();
                }
            }
        };
        /**
         * @return {?}
         */
        DynamicDirective.prototype.ngOnDestroy = function () {
            this._disconnectOutputs();
        };
        /**
         * @param {?=} isFirstChange
         * @return {?}
         */
        DynamicDirective.prototype.updateInputs = function (isFirstChange) {
            if (isFirstChange === void 0) { isFirstChange = false; }
            if (isFirstChange) {
                this._updateCompFactory();
            }
            var /** @type {?} */ compInst = this._componentInst;
            var /** @type {?} */ inputs = this._inputs;
            if (!inputs || !compInst) {
                return;
            }
            inputs = this._resolveInputs(inputs);
            Object
                .keys(inputs)
                .forEach(function (p) { return compInst[p] = inputs[p]; });
            // Mark component for check to re-render with new inputs
            if (this._compCdr) {
                this._compCdr.markForCheck();
            }
            this.notifyOnInputChanges(this._lastInputChanges, isFirstChange);
        };
        /**
         * @return {?}
         */
        DynamicDirective.prototype.bindOutputs = function () {
            var _this = this;
            this._disconnectOutputs();
            var /** @type {?} */ compInst = this._componentInst;
            var /** @type {?} */ outputs = this._outputs;
            if (!outputs || !compInst) {
                return;
            }
            outputs = this._resolveOutputs(outputs);
            Object.keys(outputs)
                .filter(function (p) { return compInst[p]; })
                .forEach(function (p) { return compInst[p]
                .pipe(operators.takeUntil(_this._outputsShouldDisconnect$))
                .subscribe(outputs[p]); });
        };
        /**
         * @param {?=} changes
         * @param {?=} forceFirstChanges
         * @return {?}
         */
        DynamicDirective.prototype.notifyOnInputChanges = function (changes, forceFirstChanges) {
            if (changes === void 0) { changes = {}; }
            // Exit early if component not interested to receive changes
            if (!this._componentInst.ngOnChanges) {
                return;
            }
            if (forceFirstChanges) {
                changes = this._collectFirstChanges();
            }
            this._componentInst.ngOnChanges(changes);
        };
        /**
         * @return {?}
         */
        DynamicDirective.prototype._disconnectOutputs = function () {
            this._outputsShouldDisconnect$.next();
        };
        /**
         * @param {?} inputs
         * @return {?}
         */
        DynamicDirective.prototype._getInputsChanges = function (inputs) {
            return this._inputsDiffer.diff(this._inputs);
        };
        /**
         * @param {?} differ
         * @return {?}
         */
        DynamicDirective.prototype._updateInputChanges = function (differ) {
            this._lastInputChanges = this._collectChangesFromDiffer(differ);
        };
        /**
         * @return {?}
         */
        DynamicDirective.prototype._collectFirstChanges = function () {
            var /** @type {?} */ changes = ({});
            var /** @type {?} */ inputs = this._inputs;
            Object.keys(inputs).forEach(function (prop) { return changes[prop] = createNewChange(inputs[prop]); });
            return this._resolveChanges(changes);
        };
        /**
         * @param {?} differ
         * @return {?}
         */
        DynamicDirective.prototype._collectChangesFromDiffer = function (differ) {
            var /** @type {?} */ changes = ({});
            differ.forEachAddedItem(recordToChanges(changes));
            differ.forEachItem(recordToNewChanges(changes));
            return this._resolveChanges(changes);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DynamicDirective.prototype._inputsChanged = function (changes) {
            return 'ngComponentOutletNdcDynamicInputs' in changes || 'ndcDynamicInputs' in changes;
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DynamicDirective.prototype._outputsChanged = function (changes) {
            return 'ngComponentOutletNdcDynamicOutputs' in changes || 'ndcDynamicOutputs' in changes;
        };
        /**
         * @return {?}
         */
        DynamicDirective.prototype._resolveCompFactory = function () {
            try {
                try {
                    return this._cfr.resolveComponentFactory(this._compRef.componentType);
                }
                catch (e) {
                    // Fallback if componentType does not exist (happens on NgComponentOutlet)
                    return this._cfr.resolveComponentFactory(this._compRef.instance.constructor);
                }
            }
            catch (e) {
                // Factory not available - bailout
                return null;
            }
        };
        /**
         * @return {?}
         */
        DynamicDirective.prototype._updateCompFactory = function () {
            this._compFactory = this._resolveCompFactory();
        };
        /**
         * @param {?} inputs
         * @return {?}
         */
        DynamicDirective.prototype._resolveInputs = function (inputs) {
            if (!this._compFactory) {
                return inputs;
            }
            return this._remapIO(inputs, this._compFactory.inputs);
        };
        /**
         * @param {?} outputs
         * @return {?}
         */
        DynamicDirective.prototype._resolveOutputs = function (outputs) {
            if (!this._compFactory) {
                return outputs;
            }
            return this._remapIO(outputs, this._compFactory.outputs);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        DynamicDirective.prototype._resolveChanges = function (changes) {
            if (!this._compFactory) {
                return changes;
            }
            return this._remapIO(changes, this._compFactory.inputs);
        };
        /**
         * @param {?} io
         * @param {?} mapping
         * @return {?}
         */
        DynamicDirective.prototype._remapIO = function (io, mapping) {
            var _this = this;
            var /** @type {?} */ newIO = {};
            Object.keys(io)
                .forEach(function (key) {
                var /** @type {?} */ newKey = _this._findPropByTplInMapping(key, mapping) || key;
                newIO[newKey] = io[key];
            });
            return newIO;
        };
        /**
         * @param {?} tplName
         * @param {?} mapping
         * @return {?}
         */
        DynamicDirective.prototype._findPropByTplInMapping = function (tplName, mapping) {
            for (var _i = 0, mapping_1 = mapping; _i < mapping_1.length; _i++) {
                var map = mapping_1[_i];
                if (map.templateName === tplName) {
                    return map.propName;
                }
            }
            return null;
        };
        return DynamicDirective;
    }());
    DynamicDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[ndcDynamicInputs],[ndcDynamicOutputs],[ngComponentOutletNdcDynamicInputs],[ngComponentOutletNdcDynamicOutputs]'
                },] },
    ];
    /** @nocollapse */
    DynamicDirective.ctorParameters = function () { return [
        { type: core.KeyValueDiffers, },
        { type: core.Injector, },
        { type: core.ComponentFactoryResolver, },
        { type: undefined, decorators: [{ type: core.Inject, args: [COMPONENT_INJECTOR,] },] },
        { type: ComponentOutletInjectorDirective, decorators: [{ type: core.Host }, { type: core.Optional },] },
    ]; };
    DynamicDirective.propDecorators = {
        "ndcDynamicInputs": [{ type: core.Input },],
        "ngComponentOutletNdcDynamicInputs": [{ type: core.Input },],
        "ndcDynamicOutputs": [{ type: core.Input },],
        "ngComponentOutletNdcDynamicOutputs": [{ type: core.Input },],
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicModule = (function () {
        function DynamicModule() {
        }
        /**
         * @param {?} components
         * @param {?=} componentInjector
         * @return {?}
         */
        DynamicModule.withComponents = function (components, componentInjector) {
            if (componentInjector === void 0) { componentInjector = DynamicComponent; }
            return {
                ngModule: DynamicModule,
                providers: [
                    {
                        provide: core.ANALYZE_FOR_ENTRY_COMPONENTS,
                        useValue: components,
                        multi: true,
                    },
                    { provide: COMPONENT_INJECTOR, useValue: componentInjector },
                ],
            };
        };
        return DynamicModule;
    }());
    DynamicModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [
                        DynamicComponent,
                        DynamicDirective,
                        ComponentOutletInjectorDirective,
                        DynamicAttributesDirective,
                    ],
                    exports: [
                        DynamicComponent,
                        DynamicDirective,
                        ComponentOutletInjectorDirective,
                        DynamicAttributesDirective,
                    ],
                },] },
    ];
    /** @nocollapse */
    DynamicModule.ctorParameters = function () { return []; };

    exports.DynamicModule = DynamicModule;
    exports.DynamicDirective = DynamicDirective;
    exports.DynamicComponent = DynamicComponent;
    exports.DynamicAttributesDirective = DynamicAttributesDirective;
    exports.ɵa = COMPONENT_INJECTOR;
    exports.ɵb = ComponentOutletInjectorDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));