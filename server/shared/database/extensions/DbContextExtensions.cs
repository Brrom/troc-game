using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Linq;

namespace troc_game.shared.database.extensions
{
    public static class DbContextExtensions
    {
        public static async Task ExecuteStoredProcedure(this DbContext dbContext, string spName, params SqlParameter[] parameters)
        {
            using (var command = dbContext.Database.GetDbConnection().CreateCommand())
            {
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.CommandText = spName;

                command.Parameters.AddRange(parameters);

                await command.Connection.OpenAsync();
                var result = await command.ExecuteNonQueryAsync();
            }
        }
    }
}