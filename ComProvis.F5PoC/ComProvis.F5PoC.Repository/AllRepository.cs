using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ComProvis.F5PoC.Repository
{
    public class AllRepository : IAllRepository
    {
        F5Context _f5Context;

        public AllRepository(F5Context f5Context)
        {
            _f5Context = f5Context;
        }

        public User AuteticateUser(string username, string password)
        {
            return _f5Context.Users.FirstOrDefault(x => x.Username.Equals(username) && x.Password.Equals(password));
        }
    }
}
