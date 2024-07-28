using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using sala_de_escape.Models;

namespace sala_de_escape.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Tutorial()
    {
        return View("Tutorial");
    }
    public IActionResult Comenzar()
    {
        int sala = Escape.GetEstadoJuego();
        string habitacion = "Habitacion" + sala.ToString(); 

        return View(habitacion);
    }
    public IActionResult Creditos()
    {
    return View();
    }
    public IActionResult Habitacion(int sala, string clave)
    {
        if (sala != Escape.GetEstadoJuego())
        {
            string habitacionActual = "Habitacion" + Escape.GetEstadoJuego().ToString();
            return View(habitacionActual);
        }
        
        if (Escape.ResolverSala(sala, clave))
        {
            if (Escape.GetEstadoJuego() > Escape.TotalSalas) 
            {
                return View("Victoria");
            }
            else
            {
                string siguienteHabitacion = "Habitacion" + Escape.GetEstadoJuego().ToString();
                return View(siguienteHabitacion);
            }
        }
        else
        {
            ViewBag.Error = "La respuesta escrita fue incorrecta.";
            string habitacionActual = "Habitacion" + sala.ToString();
            return View(habitacionActual);
        }
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
