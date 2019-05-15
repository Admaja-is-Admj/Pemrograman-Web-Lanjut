/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './app.module';
import * as i2 from './app.component';
import * as i3 from './home/home.component.ngfactory';
import * as i4 from './admin/admin.component.ngfactory';
import * as i5 from './login/login.component.ngfactory';
import * as i6 from './no-access/no-access.component.ngfactory';
import * as i7 from './app.component.ngfactory';
import * as i8 from '@angular/common';
import * as i9 from '@angular/platform-browser';
import * as i10 from '@angular/forms';
import * as i11 from '@angular/http/testing';
import * as i12 from '@angular/http';
import * as i13 from './helpers/fake-backend';
import * as i14 from '@angular/router';
import * as i15 from './services/order.service';
import * as i16 from './services/auth.service';
import * as i17 from './home/home.component';
import * as i18 from './admin/admin.component';
import * as i19 from './login/login.component';
import * as i20 from './no-access/no-access.component';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.HomeComponentNgFactory,i4.AdminComponentNgFactory,i5.LoginComponentNgFactory,
              i6.NoAccessComponentNgFactory,i7.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),
          i0.ɵmpd(4608,i8.NgLocalization,i8.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,
              i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,
              ([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i9.DomSanitizer,i9.ɵe,[i8.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i9.DomSanitizer]),i0.ɵmpd(4608,i9.HAMMER_GESTURE_CONFIG,
              i9.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i9.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i9.ɵDomEventsPlugin(p0_0),new i9.ɵKeyEventsPlugin(p1_0),
                    new i9.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i8.DOCUMENT,i8.DOCUMENT,i8.DOCUMENT,i9.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i9.EventManager,i9.EventManager,[i9.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i9.ɵDomSharedStylesHost,i9.ɵDomSharedStylesHost,[i8.DOCUMENT]),
          i0.ɵmpd(4608,i9.ɵDomRendererFactory2,i9.ɵDomRendererFactory2,[i9.EventManager,
              i9.ɵDomSharedStylesHost]),i0.ɵmpd(6144,i0.RendererFactory2,(null as any),
              [i9.ɵDomRendererFactory2]),i0.ɵmpd(6144,i9.ɵSharedStylesHost,(null as any),
              [i9.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i0.Testability,i0.Testability,
              [i0.NgZone]),i0.ɵmpd(4608,i9.Meta,i9.Meta,[i8.DOCUMENT]),i0.ɵmpd(4608,
              i9.Title,i9.Title,[i8.DOCUMENT]),i0.ɵmpd(4608,i10.ɵi,i10.ɵi,([] as any[])),
          i0.ɵmpd(4608,i11.MockBackend,i11.MockBackend,([] as any[])),i0.ɵmpd(4608,
              i12.BaseRequestOptions,i12.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i12.Http,i13.fakeBackendFactory,[i11.MockBackend,i12.BaseRequestOptions]),
          i0.ɵmpd(4608,i12.BrowserXhr,i12.BrowserXhr,([] as any[])),i0.ɵmpd(4608,i12.RequestOptions,
              i12.BaseRequestOptions,([] as any[])),i0.ɵmpd(4608,i12.ResponseOptions,
              i12.BaseResponseOptions,([] as any[])),i0.ɵmpd(5120,i12.XSRFStrategy,
              i12.ɵb,([] as any[])),i0.ɵmpd(4608,i12.XHRBackend,i12.XHRBackend,[i12.BrowserXhr,
              i12.ResponseOptions,i12.XSRFStrategy]),i0.ɵmpd(5120,i14.ActivatedRoute,
              i14.ɵf,[i14.Router]),i0.ɵmpd(4608,i14.NoPreloading,i14.NoPreloading,
              ([] as any[])),i0.ɵmpd(6144,i14.PreloadingStrategy,(null as any),[i14.NoPreloading]),
          i0.ɵmpd(135680,i14.RouterPreloader,i14.RouterPreloader,[i14.Router,i0.NgModuleFactoryLoader,
              i0.Compiler,i0.Injector,i14.PreloadingStrategy]),i0.ɵmpd(4608,i14.PreloadAllModules,
              i14.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i14.ROUTER_INITIALIZER,
              i14.ɵi,[i14.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i14.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i15.OrderService,i15.OrderService,
              [i12.Http]),i0.ɵmpd(4608,i16.AuthService,i16.AuthService,[i12.Http]),
          i0.ɵmpd(512,i8.CommonModule,i8.CommonModule,([] as any[])),i0.ɵmpd(1024,
              i0.ErrorHandler,i9.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i14.ɵb()];
          },([] as any[])),i0.ɵmpd(512,i14.ɵg,i14.ɵg,[i0.Injector]),i0.ɵmpd(1024,i0.APP_INITIALIZER,
              (p0_0:any,p0_1:any,p1_0:any) => {
                return [i9.ɵc(p0_0,p0_1),i14.ɵh(p1_0)];
              },[[2,i9.NgProbeToken],[2,i0.NgProbeToken],i14.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i9.BrowserModule,i9.BrowserModule,[[3,i9.BrowserModule]]),i0.ɵmpd(512,
              i10.ɵba,i10.ɵba,([] as any[])),i0.ɵmpd(512,i10.FormsModule,i10.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i12.HttpModule,i12.HttpModule,([] as any[])),
          i0.ɵmpd(1024,i14.ɵa,i14.ɵd,[[3,i14.Router]]),i0.ɵmpd(512,i14.UrlSerializer,
              i14.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,i14.ChildrenOutletContexts,
              i14.ChildrenOutletContexts,([] as any[])),i0.ɵmpd(256,i14.ROUTER_CONFIGURATION,
              {},([] as any[])),i0.ɵmpd(1024,i8.LocationStrategy,i14.ɵc,[i8.PlatformLocation,
              [2,i8.APP_BASE_HREF],i14.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i8.Location,
              i8.Location,[i8.LocationStrategy]),i0.ɵmpd(512,i0.Compiler,i0.Compiler,
              ([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,i0.SystemJsNgModuleLoader,
              [i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),i0.ɵmpd(1024,i14.ROUTES,
              () => {
                return [[{path:'',component:i17.HomeComponent},{path:'admin',component:i18.AdminComponent},
                    {path:'login',component:i19.LoginComponent},{path:'no-access',
                        component:i20.NoAccessComponent}]];
              },([] as any[])),i0.ɵmpd(1024,i14.Router,i14.ɵe,[i0.ApplicationRef,i14.UrlSerializer,
              i14.ChildrenOutletContexts,i8.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i14.ROUTES,i14.ROUTER_CONFIGURATION,[2,i14.UrlHandlingStrategy],
              [2,i14.RouteReuseStrategy]]),i0.ɵmpd(512,i14.RouterModule,i14.RouterModule,
              [[2,i14.ɵa],[2,i14.Router]]),i0.ɵmpd(512,i1.AppModule,i1.AppModule,([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovS1VMSUFIL1BlbXJvZ3JhbWFuIFdlYiBMYW5qdXQvUGVtcm9ncmFtYW4tV2ViLUxhbmp1dC8xMi5EZXBsb3ltZW50L3NyYy9hcHAvYXBwLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9LVUxJQUgvUGVtcm9ncmFtYW4gV2ViIExhbmp1dC9QZW1yb2dyYW1hbi1XZWItTGFuanV0LzEyLkRlcGxveW1lbnQvc3JjL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
