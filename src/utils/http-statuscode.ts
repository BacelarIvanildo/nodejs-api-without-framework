export enum HttpStatusCode {
    // Informational responses (100–199)
    Continue = 100, // The server has received the request headers and the client should proceed to send the request body
    SwitchingProtocols = 101, // The requester has asked the server to switch protocols
    Processing = 102, // The server has received and is processing the request, but no response is available yet
    EarlyHints = 103, // Used to return some response headers before final HTTP message

    // Successful responses (200–299)
    Ok = 200, // Standard response for successful HTTP requests
    Created = 201, // The request has been fulfilled, resulting in the creation of a new resource
    Accepted = 202, // The request has been accepted for processing, but the processing has not been completed
    NonAuthoritativeInformation = 203, // The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version of the origin's response
    NoContent = 204, // The server successfully processed the request, and is not returning any content
    ResetContent = 205, // The server successfully processed the request, asks that the requester reset its document view
    PartialContent = 206, // The server is delivering only part of the resource due to a range header sent by the client
    MultiStatus = 207, // The message body that follows is by default an XML message and can contain a number of separate response codes
    AlreadyReported = 208, // The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again
    IMUsed = 226, // The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance

    // Redirection messages (300–399)
    MultipleChoices = 300, // Indicates multiple options for the resource from which the client may choose
    MovedPermanently = 301, // This and all future requests should be directed to the given URI
    Found = 302, // Tells the client to look at (browse to) another URL
    SeeOther = 303, // The response to the request can be found under another URI using a GET method
    NotModified = 304, // Indicates that the resource has not been modified since the version specified by the request headers
    UseProxy = 305, // The requested resource is available only through a proxy, the address for which is provided in the response
    TemporaryRedirect = 307, // In this case, the request should be repeated with another URI, but future requests should still use the original URI
    PermanentRedirect = 308, // The request and all future requests should be repeated using another URI

    // Client error responses (400–499)
    BadRequest = 400, // The server cannot or will not process the request due to an apparent client error
    Unauthorized = 401, // Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided
    PaymentRequired = 402, // Reserved for future use
    Forbidden = 403, // The request was valid, but the server is refusing action
    NotFound = 404, // The requested resource could not be found but may be available in the future
    MethodNotAllowed = 405, // A request method is not supported for the requested resource
    NotAcceptable = 406, // The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request
    ProxyAuthenticationRequired = 407, // The client must first authenticate itself with the proxy
    RequestTimeout = 408, // The server timed out waiting for the request
    Conflict = 409, // Indicates that the request could not be processed because of conflict in the request
    Gone = 410, // Indicates that the resource requested is no longer available and will not be available again
    LengthRequired = 411, // The request did not specify the length of its content, which is required by the requested resource
    PreconditionFailed = 412, // The server does not meet one of the preconditions that the requester put on the request
    PayloadTooLarge = 413, // The request is larger than the server is willing or able to process
    URITooLong = 414, // The URI provided was too long for the server to process
    UnsupportedMediaType = 415, // The request entity has a media type which the server or resource does not support
    RangeNotSatisfiable = 416, // The client has asked for a portion of the file (byte serving), but the server cannot supply that portion
    ExpectationFailed = 417, // The server cannot meet the requirements of the Expect request-header field
    ImATeapot = 418, // This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol
    MisdirectedRequest = 421, // The request was directed at a server that is not able to produce a response
    UnprocessableEntity = 422, // The request was well-formed but was unable to be followed due to semantic errors
    Locked = 423, // The resource that is being accessed is locked
    FailedDependency = 424, // The request failed due to failure of a previous request
    TooEarly = 425, // Indicates that the server is unwilling to risk processing a request that might be replayed
    UpgradeRequired = 426, // The client should switch to a different protocol such as TLS/1.0
    PreconditionRequired = 428, // The origin server requires the request to be conditional
    TooManyRequests = 429, // The user has sent too many requests in a given amount of time ("rate limiting")
    RequestHeaderFieldsTooLarge = 431, // The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large
    UnavailableForLegalReasons = 451, // The client requested a resource that cannot legally be provided, such as a web page censored by a government

    // Server error responses (500–599)
    InternalServerError = 500, // A generic error message, given when an unexpected condition was encountered and no more specific message is suitable
    NotImplemented = 501, // The server either does not recognize the request method, or it lacks the ability to fulfill the request
    BadGateway = 502, // The server was acting as a gateway or proxy and received an invalid response from the upstream server
    ServiceUnavailable = 503, // The server is currently unavailable (because it is overloaded or down for maintenance)
    GatewayTimeout = 504, // The server was acting as a gateway or proxy and did not receive a timely response from the upstream server
    HTTPVersionNotSupported = 505, // The server does not support the HTTP protocol version used in the request
    VariantAlsoNegotiates = 506, // Transparent content negotiation for the request results in a circular reference
    InsufficientStorage = 507, // The server is unable to store the representation needed to complete the request
    LoopDetected = 508, // The server detected an infinite loop while processing a request
    NotExtended = 510, // Further extensions to the request are required for the server to fulfill it
    NetworkAuthenticationRequired = 511 // The client needs to authenticate to gain network access
}
