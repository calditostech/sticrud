<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
    public function index()
    {
        $clientes = Cliente::all()->toArray();
        return array_reverse($clientes);      
    }

    public function store(Request $request)
    {
        $cliente = new Cliente([
            'nome' => $request->input('nome'),
            'codigocidade' => $request->input('codigocidade')
        ]);
        $cliente->save();

        return response()->json('Cliente Adicionado!');
    }

    public function show($id)
    {
        $cliente = Cliente::find($id);
        return response()->json($cliente);
    }

    public function update($id, Request $request)
    {
        $cliente = Cliente::find($id);
        $cliente->update($request->all());

        return response()->json('Cliente foi atualizado!');
    }

    public function destroy($id)
    {
        $cliente = Cliente::find($id);
        $cliente->delete();

        return response()->json('Cliente Deletado!');
    }
}