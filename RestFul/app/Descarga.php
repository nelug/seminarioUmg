<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Descarga extends Model
{
    protected $table = 'descargas';

	protected $guarded = array('id');

    protected $fillable = ['total','nota', 'usuario', 'fecha'];

    public function detalle()
    {
        return $this->hasMany('App\DetalleDescarga', 'descarga', 'id');
    }

    public function estado_proceso()
    {
        return $this->belongsTo('App\EstadoProceso', 'estado_proceso', 'id');
    }

    public function usuario()
    {
        return $this->belongsTo('App\User', 'usuario', 'id');
    }

}
