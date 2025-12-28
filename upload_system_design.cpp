Folder, multiple files, 
Storage -> aws s3, we are storing the raw files here.
RAG-> Index them, vectorize them -> Pinecone.
Pinecone DB








Upload -> /upload -> s3(raw data) ->

Indexer service, horizontally scalable.
pub/sub
for all the files:
{"index_data", metadata: file}
RAG stuff happens here.
Indexing -> saving to pinecone db

in parallel, do the processing/indexing of the uploaded files.

SQL
file_name, user_id, org_id, s3 url.
Pinecone db
Actual vectors


Uplaod:
Parallel upload
Batch/chunk processing


10000 files..

How to parallely send like 10 files at a moment. Tweak this number.
Show progess on the UI ,
concurrency to upload.

file1: [25%...  ]
file2: [10 %.. ]
file3: [15% ...]
...
....

Upload service
/upload -> getting the data in chunks, combining it, and pushing it to s3 and giving us a signed s3 url.

-----

directly to s3 from the frontend, 
certain checks for perms, and configure aws perms as well.
file size limits




