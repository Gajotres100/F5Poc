namespace ComProvis.F5PoC.Repository
{
    public interface IAllRepository
    {
        User AuteticateUser(string username, string password);
    }
}