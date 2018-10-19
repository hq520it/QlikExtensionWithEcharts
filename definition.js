define([], function() {
	return  {
        type: "items",
        component: "accordion",
        items: {
            dimensions: {
                uses: "dimensions",
                min: 1,
                max: 1
            },
            measures: {
                uses: "measures",
                min: 1,
                max: 1
            },
            sorting : {
                uses: "sorting"
            },
            settings: {
                uses: "settings",
                items: {
                    textColor: {
                        type: "string",
                        ref: "textColor",
                        label: "Text Color2"
                    },
                    tdLayout: {
                        type: "string",
                        ref: "tdLayout",
                        label: "td CSS Setting"
                    }
                }
            }
        }
    };
});