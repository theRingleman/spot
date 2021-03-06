import {
  api,
  body,
  endpoint,
  pathParams,
  request,
  response,
  String
} from "@airtasker/spot";

@api({ name: "contract" })
class Contract {}

@endpoint({
  method: "DELETE",
  path: "/users/:id"
})
class DeleteEndpoint {
  @request
  request(
    @pathParams
    pathParams: {
      id: String;
    },
    @body
    body: Body
  ) {}

  @response({ status: 200 })
  successResponse(@body body: Body) {}
}

interface Body {
  body: String;
}
