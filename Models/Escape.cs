static class Escape{
static string[] incognitasSalas = {"60133515","bateria","andy","rex"};
public static int estadoJuego = 1;
public static int TotalSalas = incognitasSalas.Length;


private static void InicializarJuego(){
    estadoJuego = 1; 
}

public static int GetEstadoJuego(){
    return estadoJuego;
    }

public static bool ResolverSala(int Sala, string Incognita){
    int _estadoJuego = GetEstadoJuego();
    bool resuelto;  
    string respuesta = incognitasSalas[_estadoJuego - 1];

    if(Sala != estadoJuego)
    {
        return false;
    }
    if (respuesta == Incognita){
        resuelto = true;
        estadoJuego++;
    }
    else{
        resuelto = false;
    }
    return resuelto;
}
}
