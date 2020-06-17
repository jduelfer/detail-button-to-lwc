# Detail Button to Lightning Web Component
In order to try this out in a completely clean Scratch Org, clone this repo.

`cd` into it with `cd detail-button-to-lwc`.

Create a fresh scratch org with:

```sfdx force:org:create --setdefaultusername -f config/project-scratch-def.json --setalias detail-button-to-lwc-org```

Push the source to your new org:

```sfdx force:source:push```

Open your org:

```sfdx force:org:open```

Navigate to the `Opportunities` tab and create a new `Opportunity`. Once created, you can click on the `MyComponent` link in the top right corner.
![detail button](/img/detail-button.png)

This will bring you to the LWC, wrapped within the Aura Component page. The URL parameter should be accessible within your LWC.
![lwc in aura component](/img/lwc-component.png)

## Why an Aura component?
Lightning Web Components are still not accessible via _addressable_ URLs. Although we can expose an LWC via a Lightning Tab, we cannot pass parameters to it.

This is crucial when adding a button to a record's detail page. We want to be able to pass the context of the record.

## What's with the Aura change handler?
Aura components cache like crazy. To force a refresh of the component so we don't have stale data, we have to refresh the view whenever the `pageReference` default value changes.

If you don't believe me, comment out the handler. Go to any Opportunity and click the button. Then go to _a different_ Opportunity and click the button. It will show stale data on the page, even though the URL has changed. The `pageReference` change handler prevents this unexpected caching.