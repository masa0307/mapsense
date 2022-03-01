
    <?php

    use Illuminate\Support\Facades\Schema;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Database\Migrations\Migration;

    class CreateListsTable extends Migration
    {
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up()
        {
            Schema::create("lists", function (Blueprint $table) {

                $table->bigIncrements('id');
                $table->string('title');
                $table->foreignId("user_id")->constrained('users')->onDelete('cascade');



                // ----------------------------------------------------
                // -- SELECT [lists]--
                // ----------------------------------------------------
                // $query = DB::table("lists")
                // ->leftJoin("users","users.id", "=", "lists.user_id")
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
            Schema::dropIfExists("lists");
        }
    }
