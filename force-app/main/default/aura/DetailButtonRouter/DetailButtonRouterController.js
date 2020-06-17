({
	init : function(cmp, event, helper) {
		cmp.set("v.recordId", cmp.get("v.pageReference").state.c__recordId);
    },
    onPageReferenceChanged : function(cmp, event, helper) {
        cmp.set("v.recordId", cmp.get("v.pageReference").state.c__recordId);
        $A.get('e.force:refreshView').fire();
    }
})