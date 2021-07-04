/**
* @swagger
* /post/addPost:
*  post:
*      tags:
*          - WEB post service
*      summary: User post API
*      description: API should create new post updated by the user if they provide mandatory datas, for this API JWT is required you can fetch that from login API
*      requestBody:
*          content:
*              multipart/form-data:
*                  schema:
*                      type: object
*                      properties:
*                          title:
*                              type: string
*                          description:
*                              type: string
*                          image:
*                              type: string
*                              format: binary
*                      required:
*                          - title
*                      example:
*                          "title": "title"
*                          "description": "test"
*      responses:
*          '200':
*              description: Success response
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/addPostResponse'
*                      example:
*                          title: "title"
*                          description: "test"
*                          image: "test@123"
*          '400':
*              description: Invalid parameters, Something went wrong while uploading post
*          '401':
*              description: Unauthorized
*          '500':
*              description: Internal server error
* /post/getPosts:
*  post:
*      tags:
*          - WEB post service
*      summary: User get all post API
*      description: API should fetch all post updated by the users if they provide mandatory datas, for this API JWT is required you can fetch that from login API
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      properties:
*                          search:
*                              type: string
*                          pageSize:
*                              type: number
*                          pageNumber:
*                              type: number
*                      required:
*                          - search
*                      example:
*                          "search": ""
*                          "pageSize": 5
*                          "pageNumber": 1
*      responses:
*          '200':
*              description: Success response
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/getPostResponse'
*                      example:
*                          title: "title"
*                          description: "test"
*                          image: "image"
*                          userDetail: {
*                              name: "test",
*                              email: "test@gmail.com",
*                              image: "image"
*                          }
*          '400':
*              description: Invalid parameters, Something went wrong while finding post
*          '401':
*              description: Unauthorized
*          '500':
*              description: Internal server error
* /post/getSinglePost/{id}:
*  get:
*      tags:
*          - WEB post service
*      summary: User get single post API
*      description: API should fetch single post updated by the users if they provide mandatory datas, for this API JWT is required you can fetch that from login API
*      parameters:
*          - name: id
*            in: path
*            type: string
*            required: true
*            description: Give the _id received in the getPosts API
*            schema:
*               type: string
*      responses:
*          '200':
*              description: Success response
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/getPostResponse'
*                      example:
*                          title: "title"
*                          description: "test"
*                          image: "image"
*                          userDetail: {
*                              name: "test",
*                              email: "test@gmail.com",
*                              image: "image"
*                          }
*          '400':
*              description: Invalid post id, Invalid id post not found, Something went wrong while fetching the post detail
*          '401':
*              description: Unauthorized
*          '500':
*              description: Internal server error
* /post/editPost/{id}:
*  put:
*      tags:
*          - WEB post service
*      summary: User edit post API
*      description: API should update the data of the post updated by the users if they provide mandatory datas, for this API JWT is required you can fetch that from login API
*      parameters:
*          - name: id
*            in: path
*            type: string
*            required: true
*            description: Give the _id received in the getPosts API
*            schema:
*               type: string
*      requestBody:
*          content:
*              multipart/form-data:
*                  schema:
*                      type: object
*                      properties:
*                          title:
*                              type: string
*                          description:
*                              type: string
*                          image:
*                              type: string
*                              format: binary
*                      required:
*                          - title
*                      example:
*                          "title": "title"
*                          "description": "test"
*      responses:
*          '200':
*              description: Post edited successfully
*          '400':
*              description: Invalid parameters, You don't have access to edit this post, Something went wrong while updating post
*          '401':
*              description: Unauthorized
*          '500':
*              description: Internal server error
* /post/deletePost/{id}:
*  delete:
*      tags:
*          - WEB post service
*      summary: User delete single post API
*      description: API should delete the post updated by the users if they provide mandatory datas, for this API JWT is required you can fetch that from login API
*      parameters:
*          - name: id
*            in: path
*            type: string
*            required: true
*            description: Give the _id received in the getPosts API
*            schema:
*               type: string
*      responses:
*          '200':
*              description: Post deleted successfully
*          '400':
*              description: Invalid parameters, You don't have access to delete this post, Something went wrong while deleting post
*          '500':
*              description: Internal server error
* components:
*  schemas:
*      addPostResponse:
*          type: object
*          properties:
*              title:
*                  type: string
*              description:
*                  type: string
*              image:
*                  type: string
*      getPostResponse:
*          type: object
*          properties:
*              title:
*                  type: string
*              description:
*                  type: string
*              image:
*                  type: string
*              userDetail:
*                  type: object
*                  properties:
*                      name:
*                          type: string
*                      email:
*                          type: string
*                      image:
*                          type: string
*/