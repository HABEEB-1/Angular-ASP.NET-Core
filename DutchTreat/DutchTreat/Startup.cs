using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using IHostingEnvironment = Microsoft.Extensions.Hosting.IHostingEnvironment;

namespace DutchTreat
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {

        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
