import java.util.ArrayList;
import java.util.List;

public class EjemploJava8 {

     public static void main(String []args){
        System.out.println("1222222222222");
        List<Integer> test = new ArrayList<>();
        test.add(15);
        test.add(1);
        test.add(10);
        test.add(8);
        test.add(4);

        test.stream()
                .forEach(value -> System.out.println(value));
     }
}