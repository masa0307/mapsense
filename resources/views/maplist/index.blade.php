<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    @error('title')
                    <p class="text-red-600 pb-2 pl-9">{{$message}}</p>
                    @enderror
                    <form action="{{route('maplist.create')}}" method="POST" class="flex">
                        @csrf
                        <button class="block rounded"><span
                                class="font-bold text-xl bg-blue-400 leading-5 text-slate-50 align-middle">＋</span></button>
                        <input type="text" name="title" value="{{old('title')}}" class="w-full block ml-4 rounded-lg">
                    </form>
                </div>
            </div>

            @foreach ($lists as $list)
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-3">
                <div class="p-6 bg-white border-b border-gray-200">
                    <button class="font-bold text-xl bg-red-400 rounded-full leading-5 text-slate-50"><span
                            class="align-middle">ー</span></button>
                    <a href="{{route('maplist.show', $list)}}" class="ml-4">{{$list->title}}</a>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</x-app-layout>
