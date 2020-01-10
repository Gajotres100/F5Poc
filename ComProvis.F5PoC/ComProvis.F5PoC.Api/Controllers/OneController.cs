using ComProvis.F5PoC.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ComProvis.F5PoC.Api.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Produces("application/json")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class OneController : ControllerBase
    {
        private IConfiguration Configuration { get; set; }
        private IAllRepository Repository { get; set; }

        public OneController(IConfiguration configuration, IAllRepository repository)
        {
            Configuration = configuration;
            Repository = repository;
        }


        [HttpGet()]
        [Route("{username}/password/{password}")]
        public IActionResult GetLogin(string username, string password)
        {
            var user = Repository.AuteticateUser(username, password);
            if(user == null) return StatusCode(403);
            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var token = GenerateJwtToken(user.Id.ToString(), "User", user?.Username);
            string Token = jwtSecurityTokenHandler.WriteToken(token);

            return Ok(new { Token });
        }

        [HttpPost()]
        [Route("Save")]
        public IActionResult Post()
        {
            return Ok();
        }

        private JwtSecurityToken GenerateJwtToken(string guid, string role, string username)
        {
            var claimdata = new[] { new Claim(ClaimTypes.NameIdentifier, guid), new Claim(ClaimTypes.Role, role), new Claim(ClaimTypes.Upn, username) };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"]));
            var signInCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);

            var token = new JwtSecurityToken(
                issuer: Configuration["Tokens:Issuer"],
                expires: DateTime.Now.AddHours(1),
                claims: claimdata,
                signingCredentials: signInCredentials
                );

            return token;

        }
    }
}
