# Crm

## Objects

Types:

- <code><a href="./src/resources/crm/objects/objects.ts">AssociatedID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">AssociationSpec</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">AssociationSpecWithLabel</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectBatchInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectBatchInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectBatchInputUpsert</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchReadInputSimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchResponsePublicDefaultAssociation</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchResponseSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">BatchResponseSimplePublicUpsertObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CollectionResponseAssociatedID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CollectionResponseMultiAssociatedObjectWithLabelForwardPaging</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CollectionResponseSimplePublicObjectWithAssociationsForwardPaging</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">CollectionResponseWithTotalSimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">Filter</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">FilterGroup</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">LabelsBetweenObjectPair</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">MultiAssociatedObjectWithLabel</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">Paging</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PreviousPage</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicAssociationsForObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicDefaultAssociation</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicGdprDeleteInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicMergeInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">PublicObjectSearchRequest</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectBatchInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectBatchInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectBatchInputUpsert</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectID</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectInput</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectInputForCreate</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicObjectWithAssociations</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">SimplePublicUpsertObject</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">StandardError</a></code>
- <code><a href="./src/resources/crm/objects/objects.ts">ValueWithTimestamp</a></code>

### Contacts

Methods:

- <code title="post /crm/objects/2026-03/{objectType}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">create</a>(objectType, { ...params }) -> SimplePublicObject</code>
- <code title="patch /crm/objects/2026-03/{objectType}/{objectId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">update</a>(objectID, { ...params }) -> SimplePublicObject</code>
- <code title="get /crm/objects/2026-03/{objectType}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">list</a>(objectType, { ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="delete /crm/objects/2026-03/{objectType}/{objectId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">delete</a>(objectID, { ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/{objectType}/gdpr-delete">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">gdprDelete</a>(objectType, { ...params }) -> void</code>
- <code title="get /crm/objects/2026-03/{objectType}/{objectId}">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">get</a>(objectID, { ...params }) -> SimplePublicObjectWithAssociations</code>
- <code title="post /crm/objects/2026-03/{objectType}/merge">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">merge</a>(objectType, { ...params }) -> SimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/search">client.crm.objects.contacts.<a href="./src/resources/crm/objects/contacts.ts">search</a>(objectType, { ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>

### Custom

Methods:

- <code title="post /crm/objects/2026-03/{objectType}/batch/create">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom.ts">create</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/update">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom.ts">update</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="get /crm/objects/2026-03/{objectType}">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom.ts">list</a>(objectType, { ...params }) -> SimplePublicObjectWithAssociationsPage</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/archive">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/read">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom.ts">get</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/merge">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom.ts">merge</a>(objectType, { ...params }) -> SimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/search">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom.ts">search</a>(objectType, { ...params }) -> CollectionResponseWithTotalSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/upsert">client.crm.objects.custom.<a href="./src/resources/crm/objects/custom.ts">upsert</a>(objectType, { ...params }) -> BatchResponseSimplePublicUpsertObject</code>

### Tasks

Methods:

- <code title="delete /crm/objects/2026-03/{objectType}/{objectId}">client.crm.objects.tasks.<a href="./src/resources/crm/objects/tasks/tasks.ts">delete</a>(objectID, { ...params }) -> void</code>

#### Batch

Methods:

- <code title="post /crm/objects/2026-03/{objectType}/batch/create">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">create</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/update">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">update</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/archive">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">delete</a>(objectType, { ...params }) -> void</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/read">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">get</a>(objectType, { ...params }) -> BatchResponseSimplePublicObject</code>
- <code title="post /crm/objects/2026-03/{objectType}/batch/upsert">client.crm.objects.tasks.batch.<a href="./src/resources/crm/objects/tasks/batch.ts">upsert</a>(objectType, { ...params }) -> BatchResponseSimplePublicUpsertObject</code>
