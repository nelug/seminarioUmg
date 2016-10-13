<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    protected $table = 'ventas';

	protected $guarded = array('id');
    
    protected $fillable = ['total', 'cliente', 'usuario', 'fecha'];
    
    public function detalle()
    {
        return $this->hasMany('DetalleVenta', 'venta', 'id');
    }
    
    public function estado()
    {
        return $this->belongsTo('EstadoProceso', 'estado_proceso', 'id');
    }
    
    public function usuario()
    {
        return $this->belongsTo('Usuario', 'usuario', 'id');
    }
    
    public function cliente()
    {
        return $this->belongsTo('Cliente', 'cliente', 'id');
    }
}