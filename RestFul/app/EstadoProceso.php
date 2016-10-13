<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class EstadoProceso extends Model
{
    protected $table = 'estado_proceso';

	protected $guarded = array('id');
    
    protected $fillable = ['estado'];
}