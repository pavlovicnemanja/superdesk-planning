# Superdesk Planning Changelog

## [1.6.1] 2019-07-17
### Fixes
- [SDESK-4471] Reschedule and Postpone bugs when editor is open (#1259)
- [SDESK-4453] Round up time when adding coverage for a published/scheduled news item (#1257)
- [SDESK-4435] Cancel-All-Coverage and updating planning form was throwing an etag error
- [SDESK-4436] New-line missing in downloaded file (Windows)
- [SDESK-4318] Show name in workqueue in absence of slugline and headline
- [SDESK-4336] Allow updates to planning items with disabled agendas
- [SDESK-4413] Location Popup was closing when location text was selected and mouse click released


## [1.6] 2019-07-09
### Features
- [SDBELGA-108] Event templates API.
- [SDBELGA-111] As a user I want to select an article template when I do 'Export as article'
- [SDESK-4125] Download functionality for events
- [SDESK-4080] Adding configuration so that reason can be made mandatory.
- [SDESK-4094][SDESK-4125] Export templates for planning and events
- [SDESK-4075] Manage Locations
- [SDESK-4128] Check for an unfulfilled assignment on publish
- [SDESK-4027] Pre-built filters for events and planning view.
- [SDESK-4026] Extend the Coverage concept to include iterations/updates to the original text coverage item
- [SDESK-3833] Keyboard shortcut to access planning module
- [SDBELGA-70] add planning details authoring widget
- [SDESK-4022] Add 'Create and Open Planning Item' action to Event Editor

### Improvements
- [SDESK-4063] Add loader animation on file upload
- [SDESK-4329] Show coverage type in planning widget coverage details
- [SDESK-4307] Locations Management enhancements
- [SDESK-4375] Show 'genre' in assignments list view
- [SDESK-4377] Make ed-note editable in add-to-planning modal
- [SDBELGA-108] Add unused templates at the end of recent event templates list.
- [SDBELGA-108] Store event related data as subdict in event templates schema.
- [SDBELGA-120] Remove disabled agendas from export
- [SDESK-4311] Getting content from archive items for exporting planning based on templates
- [SDESK-4332] Apply the users byline on the item created when starting work
- [SDESK-4301] Reshuffle Timezone and Occurance Status fields in Event Form
- [SDESK-4241] Spacing between icons when viewing contacts in planning module
- [SDESK-4302] Support max-length for selecting meta terms
- [SDESK-4312] Add Place for event's download format
- [SDBELGA-110] Send an array of agendas to export templates
- [SDESK-4280] Minor changes to export templates
- [SDESK-4280] Changes to variables made available to exporting templates
- [SDESK-4122] Open an assignment on clicking an assignment related notification
- Add a system setting to control which desks to display the fulfil modal
- [SDESK-4128] Modify fulfil assignment modal title when publishing news item
- [SDESK-4128] Modify onpublish fulfil modal
- Implement checking of config option 'planning_check_for_assignment_on_publish', defaults to false
- [SDBELGA-104] add contacts info to export as article template
- [SDESK-4192] On planning duplicate use server timezone to duplicate planning item.
- [SDESK-4131] Show 'Ignore/Cancel/Save' dialog for 'UpdateRepetitions' action
- [SDESK-3921] Editor refactoring
- [SDESK-4130] Add desk label to Assignment list item
- [SDESK-4126] Provide desk dropdown in Assignments when in a custom workspace
- [SDESK-4119] Dont round up coverage time if derived from an Event
- [SDESK-4028] Keep initial focus on Event Date for non existing events when opened in Editor
- [SDESK-4081] Change to the behaviour of 'postponed', 'cancel' and 'reschedule' actions for multi-day events
- [SDESK-4082] Allow unpost action for cancelled events and plannings
- [SDESK-4057][SDESK-4058][SDESK-4059] Modified display of timezone in events and planning list/preview.
- [SDESK-4021] Improvement to the provision of default due date/time for new Coverages
- [SDESK-4084] Adding slugline to tooltip of coverages in planning.
- [SDESK-4083] Allow cancelled coverages to be removed
- [SDESK-4041] Assigned user tooltip in assignment list item
- [SDESK-4040] Add Contact field to coverages
- [SDESK-4042] Add coverage item action to planning list item
- [SDESK-4045] Treat 'content item type' of text equivalent to a text coverage

### Fixes
- [SDESK-4320] Duplicated Planning item does not get locked if the original is linked to an Event
- (fix) Limit pydocstyle < 4.0
- [SDESK-4453] Coverage schedule time for published or scheduled news item should be derived from the news item
- [SDESK-4451] sequence_no in delivery record was null instead of 0 by default
- [SDESK-4410] Location from an event was not getting deleted
- [SDESK-4410] Bug when setting time for  Coverage Schedule Date
- [SDESK-4414] Locking linked updated news story was locking the assignment
- [SDESK-4400] Time in Event exports are in UTC instead of server timezone
- [SDBELGA-108] List all recent event templates is 'limit' query param was not provided.
- [SDESK-4368] Publish time in delivery record is not taking content item's publish schedule into account
- [SDESK-4349] When LONG_EVENT_DURATION_THRESHOLD is configured and if the coverage time is not set, set dates and times separately
- [SDESK-4345] When coverage is added from add-to-planning modal, coverage time should always be rounded to nearest hour
- [SDESK-4346] Unposting cancelled planning item after an assignment was removed was causing an error
- [SDESK-4344] When adding content to planning map headline and abstract of story to headline and description of planning item and vice versa
- [SDESK-4341] Fulfil Assignment modal should only be thrown when publishing stories not already linked to Planning
- [SDESK-4321] Saving an Event fails after the user creates a Planning item
- [SDESK-4244] Re-request the event and event/planning lists on unpost/post
- [SDESK-4122] Assignment notification click was not opening the assignment when auto-add-to-workflow feature was turned ON
- [SDESK-4243] Update coverage status on editor when 'cancel all coverage' is executed
- [SDESK-4300] Update autosave item after post/unpost/save
- fix(convert killed event to recurring) request on notification now includes killed
- [SDESK-4296] Assignments behaviour when linked updated content moves desk
- [SDESK-4250] Place the cursor at the end of text in slugline when opening items in authoring
- [SDESK-4242] Validate planning on post to trap missing slugline
- [SDESK-4219] Remove the ability to edit in Add to Planning Modal
- [SDESK-4245] Fix error on update repetitions on killed events
- [SDESK-4273] Use exact slugline match in Fulfil Assignment on Publish
- Fix bug with 'PLANNING_FULFIL_ON_PUBLISH_FOR_DESKS' config if the config is an empty string
- [SDESK-4266] Handle removing featured planning items in the client
- [SDESK-4240] (fix) Location deleted when assigning a calendar to an Event
- [SDESK-4252] Fulfil Assignment links was updating regardless of PLANNING_LINK_UPDATES_TO_COVERAGES setting
- (fix) Limit assignments in fulfil modal to the content type
- fix(locations) Handle Locations with no address
- [SDESK-4214] Coverage completion notifications being generated on content updates
- [SDESK-4193] Convert unique_id to int in eventUtils.modifyForClient
- Ignore unique_id when comparing items and for autosave
- [SDNTB-572] Fix gathering of ingest providers
- (fix) Event schedule input not using proper timezone
- [SDESK-4026] Maintain sequence no during delivery creation on story updates and key assignments in complete status once completed
- [SDESK-4131] Force update redux store when locking/unlocking items
- [EVENTS] fixed crash on missing `state_reason` + don't override requested `state` update
- [SDESK-4142] (fix) Preview/Editor panels not scrolling in 'AddToPlanning'/'FulfilAssignment' modals
- [SDESK-4141] Only allow 'Assign To Calendar' if Event is not locked
- [SDESK-3975] (fix): FeaturedPlanning not clearing modal state when force unlocked
- [SDESK-4118] Error when unposting event which has a planning item
- [SDESK-4064] Netrwork Errors while filling link field of an event
- (fix) Last day of the multi-day event was not visible in the events list.
- validate custom fields according to schema
- (fix) Could not remove cancelled coverage and assigned user tooltip was not visible
- [SDESK-4056] Unassigned coverage will be put in workflow when assigned
- fix item state not being translated
- [SDESK-4088] Update repetitions was changing state of a published item
- [SDESK-4087] Items visibility in Featured Stories Modal
- [SDESK-3980] Inactive or disabled users should not be available for assignment selection
- (fix) Using gettext function of planning module so that is backward compatible.
- [SDESK-4035] Assignment notifications were not handled
- [SDESK-4036] Modified date validation to handle dateformat configured for the instance.
- (fix) overide_auto_assign_to_workflow flag should not be added to item flags.


## [1.5] 2019-03-07
### Features
- [SDESK-4023,SDESK-4024] Auto add coverage to workflow and override
- [SDESK-3985] Adding scheduled date as default sort for assignment.
- [SDESK-3979] Have single drop down to select assignment form My Assignments and Desk
- [SDESK-3979]: Allow fulfil action if the item and assignment are not same desk.
- [SDESK-3742] Navigate item list from keyboard and preview item on 'enter' key
- [SDESK-3782] Command to republish events and planning to newsroom.
- [SDESK-3659] Adding references to planning items while posting event.
- [SDESK-3637] Reverting completed text assignments and unlinking  published archive items

### Fixes
- Fixing the event schedule summary in case events with different timezone than local timezone.
- Fix the problem where edit metadata of recurring event creates more recurring events.
- [SDESK-4039] Modifying action dialog to use event timezone instead of local browser timezone.
- [SDESK-4031] Using timezone offset to determine if the event is in different timezone.
- [SDESK-4025] Add tooltip to not for publication slider
- Removed attachment's file type info in event/planning item preview 
- [SDESK-4018]: Various issues with AddToPlanning/FulfilAssignment actions * Remove @wip from feature tests
- [SDESK-3952] Fixing server error on reschedule event with planning.
- Add httmock to requirements.txt
- Fix add to planning item validation to use planning schema (#1122)
- Use archive item when fulfiling assignment on published item
- SDESK-3799 Fix code formatting issues.
- SDESK-3799 Cleanup and document commands in manage.py
- [SDESK-3763] Setting timezone for featured planning for save and post action.
- [SDESK-3853] Prevent loading list items when scrolling a sub-menu
- [SDESK-3836] Add 'selection_type' to vocabularies.json
- fix unstable unit test
- fix(profiles): handle custom cvs via planning types
- [SDESK-3808] Assign to calendar overwriting all calendars in the series * (fix) events * planning view not refetching after event series updated
- [SDESK-3831] Clear week day when the frequency is not set to weekly
- [SDESK-3802] Fixing the issue with save button being disable for all day event.
- [SDESK-3801] Fixing the tooltip for not for publication icon.
- [SDESK-3805][SDESK-3807] Fixing alignment issues with event dates.
- [SDESK-3802] Return promise on submit of convert to recurring form.
- (fix) Remove unwanted attributes from planning output formatter.
- make toggle box toggle on enter when focused
