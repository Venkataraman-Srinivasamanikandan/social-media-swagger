/**
* @swagger
* /user/register:
*  post:
*      tags:
*          - WEB user service
*      summary: User registration API
*      description: API should register user if they provide mandatory datas
*      requestBody:
*          content:
*              multipart/form-data:
*                  schema:
*                      type: object
*                      properties:
*                          email:
*                              type: string
*                          name:
*                              type: string
*                          password:
*                              type: string
*                          image:
*                              type: string
*                              format: binary
*                      required:
*                          - email
*                          - name
*                          - password
*                      example:
*                          "email": "test@gmail.com"
*                          "name": "test"
*                          "password": "test@123"
*      responses:
*          '200':
*              description: Success response
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/registerResponse'
*                      example:
*                          email: "test@gmail.com"
*                          name: "test"
*                          image: "test@123"
*          '400':
*              description: Invalid parameters,Email is already taken
*          '500':
*              description: Internal server error
* /user/login:
*  post:
*      tags:
*          - WEB user service
*      summary: User login API
*      description: API should login user if they provide mandatory datas
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      properties:
*                          email:
*                              type: string
*                          password:
*                              type: string
*                      required:
*                          - email
*                          - password
*                      example:
*                          "email": "test@gmail.com"
*                          "password": "test@123"
*      responses:
*          '200':
*              description: Success response
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/loginResponse'
*                      example:
*                          JWTtoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOnsibmFtZSI6InZlbmthdCIsImVtYWlsIjoidGVzdDIyQGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cDovL2xvY2FsaG9zdDoyMDg3L2ltYWdlcy91c2VyUHJvZmlsZS9wcm9maWxlSW1hZ2VfMTYyNTMzMTg2MjU4My5qcGcifSwiaWF0IjoxNjI1Mzk1MjkyLCJleHAiOjE2MjU0MDYwOTJ9.XEaAUVzRuwPtGuAMJuWqskLBxJ6aXoMCyl_UhvMXep4"
*          '400':
*              description: Invalid parameters, Email doesn't exists, Invalid password
*          '500':
*              description: Internal server error
* 
* components:
*  schemas:
*      registerResponse:
*          type: object
*          properties:
*              email:
*                  type: string
*              name:
*                  type: string
*              image:
*                  type: string
*      loginResponse:
*          type: object
*          properties:
*              JWTtoken:
*                  type: string
*/