
    <?php

    use Illuminate\Support\Facades\Schema;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Database\Migrations\Migration;

    class CreateDirectionsTable extends Migration
    {
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up()
        {
            Schema::create("directions", function (Blueprint $table) {

                $table->bigIncrements('id');
                $table->string('title');
                $table->bigInteger('origin_location_latitude');
                $table->bigInteger('origin_location_longitude');
                $table->bigInteger('destination_latitude');
                $table->bigInteger('destination_longitude');
                $table->foreignId("list_id")->constrained("lists")->onDelete('cascade');



                // ----------------------------------------------------
                // -- SELECT [directions]--
                // ----------------------------------------------------
                // $query = DB::table("directions")
                // ->leftJoin("lists","lists.id", "=", "directions.list_id")
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
            Schema::dropIfExists("directions");
        }
    }
