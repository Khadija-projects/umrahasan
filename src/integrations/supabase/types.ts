export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      blogs: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string
          excerpt: string | null
          featured_image_url: string | null
          id: string
          meta_description: string | null
          meta_keywords: string | null
          published: boolean
          read_time: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          category: string
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string | null
          published?: boolean
          read_time?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string | null
          published?: boolean
          read_time?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      bookings: {
        Row: {
          admin_verified_at: string | null
          booking_reference: string | null
          booking_status: string | null
          check_in_date: string
          check_out_date: string
          created_at: string
          guest_id: string
          hotel_id: string
          id: string
          lead_created_at: string | null
          num_guests: number
          num_rooms: number
          payment_method: string | null
          payment_receipt_url: string | null
          payment_status: string
          receipt_uploaded_at: string | null
          room_id: string
          special_requests: string | null
          total_amount: number
          updated_at: string
          verified_by: string | null
          voucher_expiry: string | null
          voucher_url: string | null
        }
        Insert: {
          admin_verified_at?: string | null
          booking_reference?: string | null
          booking_status?: string | null
          check_in_date: string
          check_out_date: string
          created_at?: string
          guest_id: string
          hotel_id: string
          id?: string
          lead_created_at?: string | null
          num_guests: number
          num_rooms?: number
          payment_method?: string | null
          payment_receipt_url?: string | null
          payment_status?: string
          receipt_uploaded_at?: string | null
          room_id: string
          special_requests?: string | null
          total_amount: number
          updated_at?: string
          verified_by?: string | null
          voucher_expiry?: string | null
          voucher_url?: string | null
        }
        Update: {
          admin_verified_at?: string | null
          booking_reference?: string | null
          booking_status?: string | null
          check_in_date?: string
          check_out_date?: string
          created_at?: string
          guest_id?: string
          hotel_id?: string
          id?: string
          lead_created_at?: string | null
          num_guests?: number
          num_rooms?: number
          payment_method?: string | null
          payment_receipt_url?: string | null
          payment_status?: string
          receipt_uploaded_at?: string | null
          room_id?: string
          special_requests?: string | null
          total_amount?: number
          updated_at?: string
          verified_by?: string | null
          voucher_expiry?: string | null
          voucher_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_guest_id_fkey"
            columns: ["guest_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_hotel_id_fkey"
            columns: ["hotel_id"]
            isOneToOne: false
            referencedRelation: "hotels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      demo_bookings: {
        Row: {
          booking_reference: string | null
          check_in_date: string | null
          check_out_date: string | null
          created_at: string | null
          guest_email: string | null
          hotel_name: string | null
          id: string
          num_guests: number | null
          num_rooms: number | null
          payment_status: string | null
          room_type: string | null
          special_requests: string | null
          total_amount: number | null
        }
        Insert: {
          booking_reference?: string | null
          check_in_date?: string | null
          check_out_date?: string | null
          created_at?: string | null
          guest_email?: string | null
          hotel_name?: string | null
          id?: string
          num_guests?: number | null
          num_rooms?: number | null
          payment_status?: string | null
          room_type?: string | null
          special_requests?: string | null
          total_amount?: number | null
        }
        Update: {
          booking_reference?: string | null
          check_in_date?: string | null
          check_out_date?: string | null
          created_at?: string | null
          guest_email?: string | null
          hotel_name?: string | null
          id?: string
          num_guests?: number | null
          num_rooms?: number | null
          payment_status?: string | null
          room_type?: string | null
          special_requests?: string | null
          total_amount?: number | null
        }
        Relationships: []
      }
      demo_partner_registrations: {
        Row: {
          business_license: string | null
          company_name: string | null
          contact_person: string | null
          created_at: string | null
          partner_email: string
          phone: string | null
          status: string | null
        }
        Insert: {
          business_license?: string | null
          company_name?: string | null
          contact_person?: string | null
          created_at?: string | null
          partner_email: string
          phone?: string | null
          status?: string | null
        }
        Update: {
          business_license?: string | null
          company_name?: string | null
          contact_person?: string | null
          created_at?: string | null
          partner_email?: string
          phone?: string | null
          status?: string | null
        }
        Relationships: []
      }
      demo_user_data: {
        Row: {
          company_name: string | null
          created_at: string | null
          email: string
          full_name: string | null
          nationality: string | null
          phone: string | null
          user_type: string | null
        }
        Insert: {
          company_name?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          nationality?: string | null
          phone?: string | null
          user_type?: string | null
        }
        Update: {
          company_name?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          nationality?: string | null
          phone?: string | null
          user_type?: string | null
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          category: string
          created_at: string
          id: string
          is_active: boolean
          is_featured: boolean | null
          question: string
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          answer: string
          category: string
          created_at?: string
          id?: string
          is_active?: boolean
          is_featured?: boolean | null
          question: string
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          answer?: string
          category?: string
          created_at?: string
          id?: string
          is_active?: boolean
          is_featured?: boolean | null
          question?: string
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      hotels: {
        Row: {
          amenities: Json | null
          category: number
          city: string
          created_at: string
          description: string | null
          distance_from_haram: number
          id: string
          images: Json | null
          is_active: boolean | null
          name: string
          partner_id: string | null
          updated_at: string
        }
        Insert: {
          amenities?: Json | null
          category: number
          city: string
          created_at?: string
          description?: string | null
          distance_from_haram: number
          id?: string
          images?: Json | null
          is_active?: boolean | null
          name: string
          partner_id?: string | null
          updated_at?: string
        }
        Update: {
          amenities?: Json | null
          category?: number
          city?: string
          created_at?: string
          description?: string | null
          distance_from_haram?: number
          id?: string
          images?: Json | null
          is_active?: boolean | null
          name?: string
          partner_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "hotels_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          content: string
          created_at: string
          excerpt: string | null
          featured_image_url: string | null
          id: string
          is_published: boolean
          meta_description: string | null
          meta_keywords: string | null
          navigation_order: number | null
          page_type: string
          show_in_navigation: boolean | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          is_published?: boolean
          meta_description?: string | null
          meta_keywords?: string | null
          navigation_order?: number | null
          page_type: string
          show_in_navigation?: boolean | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          is_published?: boolean
          meta_description?: string | null
          meta_keywords?: string | null
          navigation_order?: number | null
          page_type?: string
          show_in_navigation?: boolean | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      partner_registrations: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          business_license: string | null
          company_name: string
          contact_person: string
          created_at: string
          email: string
          id: string
          phone: string
          status: string
          user_id: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          business_license?: string | null
          company_name: string
          contact_person: string
          created_at?: string
          email: string
          id?: string
          phone: string
          status?: string
          user_id: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          business_license?: string | null
          company_name?: string
          contact_person?: string
          created_at?: string
          email?: string
          id?: string
          phone?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_registrations_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          nationality: string | null
          phone: string | null
          updated_at: string
          user_id: string
          user_type: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          nationality?: string | null
          phone?: string | null
          updated_at?: string
          user_id: string
          user_type?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          nationality?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
          user_type?: string
        }
        Relationships: []
      }
      rooms: {
        Row: {
          available_rooms: number | null
          created_at: string
          hotel_id: string
          id: string
          max_guests: number
          price_per_night: number
          room_type: string
          updated_at: string
        }
        Insert: {
          available_rooms?: number | null
          created_at?: string
          hotel_id: string
          id?: string
          max_guests: number
          price_per_night: number
          room_type: string
          updated_at?: string
        }
        Update: {
          available_rooms?: number | null
          created_at?: string
          hotel_id?: string
          id?: string
          max_guests?: number
          price_per_night?: number
          room_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rooms_hotel_id_fkey"
            columns: ["hotel_id"]
            isOneToOne: false
            referencedRelation: "hotels"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          booking_url: string | null
          contact_info: Json | null
          created_at: string
          description: string
          featured_image_url: string | null
          features: Json | null
          gallery_images: Json | null
          id: string
          is_active: boolean
          is_featured: boolean | null
          meta_description: string | null
          meta_keywords: string | null
          name: string
          pricing_info: Json | null
          service_type: string
          short_description: string | null
          slug: string
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          booking_url?: string | null
          contact_info?: Json | null
          created_at?: string
          description: string
          featured_image_url?: string | null
          features?: Json | null
          gallery_images?: Json | null
          id?: string
          is_active?: boolean
          is_featured?: boolean | null
          meta_description?: string | null
          meta_keywords?: string | null
          name: string
          pricing_info?: Json | null
          service_type: string
          short_description?: string | null
          slug: string
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          booking_url?: string | null
          contact_info?: Json | null
          created_at?: string
          description?: string
          featured_image_url?: string | null
          features?: Json | null
          gallery_images?: Json | null
          id?: string
          is_active?: boolean
          is_featured?: boolean | null
          meta_description?: string | null
          meta_keywords?: string | null
          name?: string
          pricing_info?: Json | null
          service_type?: string
          short_description?: string | null
          slug?: string
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      umrah_guide_steps: {
        Row: {
          common_mistakes: string | null
          content: string
          created_at: string
          duration_estimate: string | null
          featured_image_url: string | null
          gallery_images: Json | null
          id: string
          important_notes: string | null
          is_active: boolean
          meta_description: string | null
          meta_keywords: string | null
          short_description: string | null
          slug: string
          step_number: number
          title: string
          updated_at: string
          video_url: string | null
        }
        Insert: {
          common_mistakes?: string | null
          content: string
          created_at?: string
          duration_estimate?: string | null
          featured_image_url?: string | null
          gallery_images?: Json | null
          id?: string
          important_notes?: string | null
          is_active?: boolean
          meta_description?: string | null
          meta_keywords?: string | null
          short_description?: string | null
          slug: string
          step_number: number
          title: string
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          common_mistakes?: string | null
          content?: string
          created_at?: string
          duration_estimate?: string | null
          featured_image_url?: string | null
          gallery_images?: Json | null
          id?: string
          important_notes?: string | null
          is_active?: boolean
          meta_description?: string | null
          meta_keywords?: string | null
          short_description?: string | null
          slug?: string
          step_number?: number
          title?: string
          updated_at?: string
          video_url?: string | null
        }
        Relationships: []
      }
      ziaraat_locations: {
        Row: {
          city: string
          created_at: string
          description: string
          distance_from_haram: number | null
          entry_fee: string | null
          featured_image_url: string | null
          gallery_images: Json | null
          historical_significance: string | null
          id: string
          is_active: boolean
          location_type: string
          meta_description: string | null
          meta_keywords: string | null
          name: string
          recommended_duration: string | null
          slug: string
          sort_order: number | null
          special_notes: string | null
          updated_at: string
          visiting_hours: string | null
        }
        Insert: {
          city: string
          created_at?: string
          description: string
          distance_from_haram?: number | null
          entry_fee?: string | null
          featured_image_url?: string | null
          gallery_images?: Json | null
          historical_significance?: string | null
          id?: string
          is_active?: boolean
          location_type: string
          meta_description?: string | null
          meta_keywords?: string | null
          name: string
          recommended_duration?: string | null
          slug: string
          sort_order?: number | null
          special_notes?: string | null
          updated_at?: string
          visiting_hours?: string | null
        }
        Update: {
          city?: string
          created_at?: string
          description?: string
          distance_from_haram?: number | null
          entry_fee?: string | null
          featured_image_url?: string | null
          gallery_images?: Json | null
          historical_significance?: string | null
          id?: string
          is_active?: boolean
          location_type?: string
          meta_description?: string | null
          meta_keywords?: string | null
          name?: string
          recommended_duration?: string | null
          slug?: string
          sort_order?: number | null
          special_notes?: string | null
          updated_at?: string
          visiting_hours?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_booking_lead: {
        Args: {
          p_guest_id: string
          p_hotel_id: string
          p_room_id: string
          p_check_in_date: string
          p_check_out_date: string
          p_num_guests: number
          p_num_rooms: number
          p_total_amount: number
          p_special_requests?: string
        }
        Returns: string
      }
      generate_booking_reference: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
