define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dijit/MenuItem',
    'JBrowse/Plugin',
    './View/SearchSeqDialog'
  ],function(declare,lang,dijitMenuItem,JBrowsePlugin,SearchSeqDialog){
      return declare(JBrowsePlugin,{
        constructor: function( args ) {
          var thisB = this;
          this.browser.afterMilestone('initView', function() {
            this.browser.addGlobalMenuItem( 
              'file', new dijitMenuItem({
                label: 'Load Comment thread',
                iconClass: 'dijitIconFilter',
                onClick: lang.hitch(this, 'createCommentsTrack')
              })
            );
          }, this );
        }, 
        createCommentsTrack: function() {
          var searchDialog = new SearchSeqDialog();
          var thisB = this;
          searchDialog.show(function( searchParams ) {
            if( !searchParams )
              return;

            var storeConf = {
              browser: thisB.browser,
              refSeq: thisB.browser.refSeq,
              type: 'RegexSequenceSearch/Store/SeqFeature/RegexSearch',
              searchParams: searchParams
            };
            var storeName = thisB.browser.addStoreConfig( undefined, storeConf );
            storeConf.name = storeName;
            var searchTrackConfig = {
                type: 'JBrowse/View/Track/CanvasFeatures',
                label: 'Comments Track',
                metadata: {
                    category: 'Feature tracks',
                    Description: "Contains comment seeds of all available comments"
                },
                store: storeName
            };

            // send out a message about how the user wants to create the new track
            thisB.browser.publish( '/jbrowse/v1/v/tracks/new', [searchTrackConfig] );

            // Open the track immediately
            thisB.browser.publish( '/jbrowse/v1/v/tracks/show', [searchTrackConfig] );
          });
        }
      });
  });
