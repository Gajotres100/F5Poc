﻿using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComProvis.F5PoC.Api.Configuration.Swagger
{
    public class HttpStatusCodeException : Exception
    {
        #region Properties

        public int StatusCode { get; set; }

        public string ContentType { get; set; } = @"text/plain";

        #endregion

        #region Constructor

        public HttpStatusCodeException(int statusCode)
        {
            StatusCode = statusCode;
        }

        public HttpStatusCodeException(int statusCode, string message)
            : base(message)
        {
            StatusCode = statusCode;
        }

        public HttpStatusCodeException(int statusCode, Exception inner)
            : this(statusCode, inner.ToString()) { }

        public HttpStatusCodeException(int statusCode, JObject errorObject)
            : this(statusCode, errorObject.ToString())
        {
            ContentType = @"application/json";
        }

        #endregion
    }
}
