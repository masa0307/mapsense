
    <?php

    use Illuminate\Support\Facades\Schema;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Database\Migrations\Migration;

    class CreateMemosTable extends Migration
    {
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up()
        {
            Schema::create("memos", function (Blueprint $table) {

                $table->bigIncrements('id');
                $table->bigInteger('current_location_latitude')->nullable();
                $table->bigInteger('current_location_longitude')->nullable();
                $table->string('memo')->nullable();
                $table->foreignId("direction_id")->constrained('directions')->onDelete('cascade');



                // ----------------------------------------------------
                // -- SELECT [memos]--
                // ----------------------------------------------------
                // $query = DB::table("memos")
                // ->leftJoin("directions","directions.id", "=", "memos.direction_id")
                // ->get();
                // dd($query); //For checking



            });
        }

        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down()
        {
            Schema::dropIfExists("memos");
        }
    }
