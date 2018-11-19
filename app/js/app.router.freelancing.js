'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/app/ezwork/dashboard');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html'
                    })

                    .state('app.frl-dashboard', {
                        url: '/ezwork/dashboard',
                        templateUrl: 'partials/frl-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                            function() {
                                                return $ocLazyLoad.load('js/controllers/frl-dashboard.js');
                                            }
                                        )
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('js/controllers/vectormap.js');
                                            }
                                          )/*.then(
                                          function(){
                                                return $ocLazyLoad.load('js/directives/ui-todowidget.js');
                                            }
                                         )*/
                                    ;
                                }
                            ]
                        }
                    })
                    .state('app.mail', {
                        abstract: true,
                        url: '/mail',
                        //template: '<div ui-view class=""></div>',
                        templateUrl: 'partials/mail.html',
                        // use resolve to load other dependences
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css', 'js/controllers/mail.js',
                                        'js/services/mail-service.js',
                                        JQ_CONFIG.moment
                                    ]);
                                }
                            ]
                        }
                    })
                    .state('app.mail.list', {
                        url: '/{fold}',
                        templateUrl: 'partials/mail-list.html'
                    })
                    .state('app.mail.compose', {
                        url: '/compose',
                        templateUrl: 'partials/mail-compose.html'
                    })
                    .state('app.mail.view', {
                        url: '/{mailId:[0-9]{1,4}}',
                        templateUrl: 'partials/mail-view.html'
                    }) 
                    .state('app.frl-users', {
                        url: '/ezwork/users',
                        templateUrl: 'partials/frl-users.html'
                    })    
                    .state('app.frl-user-add', {
                        url: '/ezwork/user-add',
                        templateUrl: 'partials/frl-user-add.html'
                    })    
                    .state('app.frl-user-edit', {
                        url: '/ezwork/user-edit',
                        templateUrl: 'partials/frl-user-edit.html'
                    })
                       
                    .state('app.frl-buyers', {
                        url: '/ezwork/tskmngr',
                        templateUrl: 'partials/frl-buyers.html'
                    })    
                    .state('app.frl-buyer-add', {
                        url: '/ezwork/brainwrite',
                        templateUrl: 'partials/frl-buyer-add.html'
                    })    
                    .state('app.frl-buyer-edit', {
                        url: '/ezwork/calendar',
                        templateUrl: 'partials/frl-buyer-edit.html'
                    })
                    .state('app.frl-sellers', {
                        url: '/ezwork/dtr',
                        templateUrl: 'partials/frl-sellers.html'
                    })    
                    .state('app.frl-seller-add', {
                        url: '/ezwork/seller-add',
                        templateUrl: 'partials/frl-seller-add.html'
                    })    
                    .state('app.frl-seller-edit', {
                        url: '/ezwork/seller-edit',
                        templateUrl: 'partials/frl-seller-edit.html'
                    })
                    .state('app.frl-report-sales', {
                        url: '/ezwork/report-sales',
                        templateUrl: 'partials/frl-report-sales.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/frl-report-sales.js');
                                        }
                                    );
                                }
                            ]
                        }
                    }) 
                    .state('app.frl-report-buyers', {
                        url: '/ezwork/report-buyers',
                        templateUrl: 'partials/frl-report-buyers.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/frl-report-buyers.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.frl-report-targets', {
                        url: '/ezwork/report-targets',
                        templateUrl: 'partials/frl-report-targets.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/frl-report-targets.js']);
                                }
                            ]
                        }
                    })
                    .state('app.frl-tickets', {
                        url: '/ezwork/tickets',
                        templateUrl: 'partials/frl-tickets.html'
                    })    
                    .state('app.frl-ticket-add', {
                        url: '/ezwork/ticket-add',
                        templateUrl: 'partials/frl-ticket-add.html'
                    })    
                    .state('app.frl-ticket-edit', {
                        url: '/ezwork/ticket-edit',
                        templateUrl: 'partials/frl-ticket-edit.html'
                    })
                    .state('app.frl-invoices', {
                        url: '/ezwork/invoices',
                        templateUrl: 'partials/frl-invoices.html'
                    })    
                    .state('app.frl-invoice-add', {
                        url: '/ezwork/invoice-add',
                        templateUrl: 'partials/frl-invoice-add.html'
                    })    
                    .state('app.frl-invoice-edit', {
                        url: '/ezwork/invoice-edit',
                        templateUrl: 'partials/frl-invoice-edit.html'
                    })
                    .state('app.frl-invoice-view', {
                        url: '/ezwork/invoice-view',
                        templateUrl: 'partials/frl-invoice-view.html'
                    }) 
                    .state('app.frl-bids', {
                        url: '/ezwork/bids',
                        templateUrl: 'partials/frl-bids.html'
                    })    
                    .state('app.frl-bid-add', {
                        url: '/ezwork/bid-add',
                        templateUrl: 'partials/frl-bid-add.html'
                    })    
                    .state('app.frl-bid-edit', {
                        url: '/ezwork/bid-edit',
                        templateUrl: 'partials/frl-bid-edit.html'
                    })

                  
                
            }
        ]
    );
