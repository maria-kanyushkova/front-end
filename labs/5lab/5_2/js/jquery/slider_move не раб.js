document.addEventListener("DOMContentLoaded", ready); 

function ready() 
{
	var slides = $("#slides").children(".slide"); // Получаем массив всех слайдов
	var dots = $("#navigation").children(".dot");
	var widthSlide = screen.width; ; // Получаем ширину видимой области
	var numberOfSlides = slides.length; // Получаем количество слайдов
	var offset = numberOfSlides * widthSlide; // Задаем начальное смещение и ширину всех слайдов
	var cheki = numberOfSlides - 1;
	var j;
	 
	$("#slides").css('widthSlide', offset); // Задаем блоку со слайдами ширину всех слайдов
	 
	for (j = 0; j < numberOfSlides; j++) 
	{
		if (j == 0) 
		{
		    $("#navigation").append("<div class='dot active'></div>");
		}
		else 
		{
		    $("#navigation").append("<div class='dot'></div>");
		}
	} 

	offset = 0; // Обнуляем смещение, так как показывается cначала 1 слайд
	numberOfSlides = 0; // Обнуляем номер текущего слайда
	j = 0;

	function movement_of_slide()
	{
		$("#navigation .active").removeClass("active");                                 
		$(this).addClass("active");
		numberOfSlides = $(this).index();
		offset = numberOfSlides * widthSlide;
		$("#slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
	}

	function prev_slide()
	{    // Событие клика на кнопку "предыдущий слайд"
		if (offset > 0) 
			{ // Проверяем, дошли ли мы до конца
			offset -= widthSlide; // Уменьшаем смещение до предыдущегоо слайда
			$("#slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
			$("#navigation .active").removeClass("active");   
			$(dots[--numberOfSlides]).addClass("active");
		}
	}

	function next_slide()
	{    // Событие клика на кнопку "следующий слайд"
		if (offset < widthSlide * cheki) 
		{    // Проверяем, дошли ли мы до конца
			offset = offset + widthSlide; // Увеличиваем смещение до следующего слайда
			$("#slides").css("transform", "translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
			$("#navigation .active").removeClass("active");   
			$(dots[++numberOfSlides]).addClass("active");
		}
	}

	$('#navigation .dot').click(function() {movement_of_slide()});
	 
	$("#next").click(function() {next_slide()});
	 
	$("#prev").click(function() {prev_slide()});
}