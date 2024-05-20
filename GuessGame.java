import java.util.Scanner;
public class GuessGame {
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        int myNumber = (int)(Math.random()*100);
        int userNo = 0;

        do{
            System.out.println("Guess the number: ");
            userNo = sc.nextInt();

            if(userNo == myNumber){
                System.out.println("Hurray, You are right!");
                break;
            }
            else if (userNo > myNumber) {
                System.out.println("Your no. is too large");
            }
            else{
                System.out.println("Your no. is too small");
            }
        }while(userNo >= 0);
        System.out.println("My number was:  ");
        System.out.println(myNumber);
    }
}
