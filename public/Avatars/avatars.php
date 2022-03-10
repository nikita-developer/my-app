<?php
    // Открыть файл data.json
    $file = file_get_contents('/dataAvatars.json');

    // Декодировать в массив
    $taskList = json_decode($file, TRUE); 
    
    // Очистить переменную $file
    unset($file);

    // Представить новую переменную как элемент массива, в формате 'ключ'=>'имя переменной'
    $taskList[] = array('name'=>$name);

    // Перекодировать в формат и записать в файл.
    file_put_contents('dataAvatars.json', json_encode($taskList));
    
    unset($taskList);

    // ссылка на статью
    // https://www.delay-delo.com/content/rabota-php-c-json-dobavlenie-udalenie-i-obnovlenie-v-fayle
?>