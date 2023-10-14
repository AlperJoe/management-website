using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FullCalendar_3.Models;


namespace prep_3.Controllers
{
    public class TodoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calendar()
        {
            var datetime1_start = DateTime.Now;
            var datetime1_finish = datetime1_start.AddHours(2);

            var datetime2_start = datetime1_finish.AddDays(1);
            var datetime2_finish = datetime2_start.AddHours(2);

            var datetime3_start = datetime2_finish.AddHours(2);
            var datetime3_finish = datetime3_start.AddMinutes(240);

            var datetime4_start = datetime3_start.AddHours(3);
            var datetime4_finish = datetime4_start.AddHours(2);

            var datetime5_start = datetime4_start.AddHours(18);
            var datetime5_finish = datetime5_start.AddHours(4);

            ViewData["events"] = new[]
            {
                new Event{ Id = 1, StartDate = datetime1_start,Title = "Work on js", Description = "Udemy'den aldığın kursu bitir", Link = "",EndDate = datetime1_finish},

                new Event{ Id = 2, StartDate = datetime2_start,Title =  "Work on .net", Description = "MVC kullanmayı öğren", Link = "", EndDate = datetime2_finish},

                new Event{ Id = 3, StartDate = datetime3_start,Title =  "How to css", Description = "Sass unutmuşsundur kesin", Link = "", EndDate = datetime3_finish},
                
                new Event{ Id = 4, StartDate = datetime4_start,Title =  "Make Frontend", Description = "Önemli büyük ihtimal buradan devam edersin", Link = "",EndDate = datetime4_finish},
               
                new Event{ Id = 5, StartDate = datetime5_start,Title =  "Create website",  Description = "Abi zamanı geldi artık", Link = "",EndDate = datetime5_finish},
               
            };

            return View();
        }
        public IActionResult Dashb()
        {
            return View();
        }
    }
}